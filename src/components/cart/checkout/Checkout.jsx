import React, { Component } from "react";

class Checkout extends Component {
  render() {
    return <button onClick={this.props.onClickCheckout}>Checkout</button>;
  }
}

export default Checkout;
