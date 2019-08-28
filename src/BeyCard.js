import React from "react";

class BeyCard extends React.Component {

  render(){
  return (
    <div>
      <h3>{this.props.bey.name}</h3>
      <img onClick={() => this.props.handleClick(this.props.bey)} src={this.props.bey.img}/>
    </div>
  )}
};

export default BeyCard;
