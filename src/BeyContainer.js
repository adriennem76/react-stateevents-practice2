import React from "react";
import BeyCard from "./BeyCard"

class BeyContainer extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.props.beys.map(bey => <BeyCard key={"bey"+bey.id} bey={bey} handleClick={this.props.handleClick}/>)}
      </div>
    );
  }
}

export default BeyContainer;
