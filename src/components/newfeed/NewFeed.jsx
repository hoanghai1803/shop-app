import React, { Component } from "react";
import Items from "./items/Items";

class NewFeed extends Component {
  render() {
    return (
      <Items items={this.props.items} onClickAdd={this.props.onClickAdd} />
    );
  }
}

export default NewFeed;
