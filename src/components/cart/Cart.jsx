import React, { Component } from "react";
import Counters from "./counters/Counters";
import Checkout from "./checkout/Checkout";
import Form from "./checkout/Form";

class Cart extends Component {
  state = {
    checkouting: false
  };

  handleClickCheckout = () => {
    this.setState({
      checkouting: true
    });
  };

  handleClickReturnCart = () => {
    this.setState({
      checkouting: false
    });
  };

  render() {
    const {
      items,
      quantity,
      onClickIncrement,
      onClickDecrement,
      onClickReset,
      onClickRemove,
      onClickConfirmPayment
    } = this.props;

    const itemsAdded = [...items.filter(item => item.added)];

    return (
      <React.Fragment>
        {!this.state.checkouting && (
          <Counters
            items={itemsAdded}
            onClickIncrement={onClickIncrement}
            onClickDecrement={onClickDecrement}
            onClickReset={onClickReset}
            onClickRemove={onClickRemove}
          />
        )}
        {quantity > 0 && !this.state.checkouting && (
          <Checkout onClickCheckout={this.handleClickCheckout} />
        )}
        {this.state.checkouting && (
          <Form
            onClickReturnCart={this.handleClickReturnCart}
            onClickConfirmPayment={onClickConfirmPayment}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Cart;
