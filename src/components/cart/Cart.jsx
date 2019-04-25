import React, { Component } from "react";
import Counters from "./counters/Counters";
import Checkout from "./checkout/Checkout";
import Form from "./checkout/Form";

class Cart extends Component {
  state = {
    checkouting: false
  };

  // setState for checkouting state
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

    // Only keep the items that have been added
    const itemsAdded = [...items.filter(item => item.added)];

    // Only keep the items that have quantity greater than 0
    const itemsBought = [...items.filter(item => item.quantity)];

    return (
      <React.Fragment>
        {/* If checkouting = false, "Counters" will be rendered */}
        {!this.state.checkouting && (
          <Counters
            items={itemsAdded}
            onClickIncrement={onClickIncrement}
            onClickDecrement={onClickDecrement}
            onClickReset={onClickReset}
            onClickRemove={onClickRemove}
          />
        )}

        {/* If checkouting = false, and the quantity of items at least 1, 
        then the "Checkout" button will appear */}
        {quantity > 0 && !this.state.checkouting && (
          <Checkout onClickCheckout={this.handleClickCheckout} />
        )}

        {/* After click "Checkout" button, "checkouting" state will be set to 
        false, and the "Form" for checkout will be rendered */}
        {this.state.checkouting && (
          <Form
            items={itemsBought}
            onClickReturnCart={this.handleClickReturnCart}
            onClickConfirmPayment={onClickConfirmPayment}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Cart;
