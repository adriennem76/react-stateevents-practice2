import React, { Component } from "react";
import BeyCard from "./BeyCard"

export default class Favorites extends Component {
  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.props.favoriteBeys.sort((a,b) => a.id - b.id).map(bey => <BeyCard key={"bey"+bey.id} bey={bey} handleClick={this.props.handleClick}/>)}
      </div>
    );
  }
}
