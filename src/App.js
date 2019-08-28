import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"

class App extends Component {

  state={beys: [], favoriteBeys: []} 

  handleClick = (bey) => {
    bey.favorite = !bey.favorite
    bey.favorite ? this.setState({favoriteBeys: [...this.state.favoriteBeys, bey]}) : this.setState({favoriteBeys: this.state.favoriteBeys.filter(eachBey => eachBey != bey)}) 
  }

  componentDidMount(){
    fetch("http://localhost:4000/beys")
    .then(resp => resp.json())
    .then(data => this.setState({beys: data}))
  }

  render(){
    return (
      <div className="container">
        <BeyContainer beys={this.state.beys} handleClick={this.handleClick}/>
        <Favorites favoriteBeys={this.state.favoriteBeys} handleClick={(bey) => null} />
      </div>
    );
  }
  
};

export default App;
