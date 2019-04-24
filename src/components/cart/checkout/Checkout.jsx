import React, { Component } from "react";

class Checkout extends Component {
  render() {
    // This button will call handleClickCheckout in Cart.jsx to set checkouting state
    // of this component to true, and render "Form" checkout instead of "Form" checkout
    return <button onClick={this.props.onClickCheckout}>Checkout</button>;
  }
}

export default Checkout;
