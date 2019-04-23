import React, { Component } from "react";
import Counters from "./counters/Counters";

class Cart extends Component {
  render() {
    const {
      items,
      onClickIncrement,
      onClickDecrement,
      onClickReset,
      onClickRemove
    } = this.props;

    const itemsAdded = [...items.filter(item => item.added)];

    return (
      <React.Fragment>
        <Counters
          items={itemsAdded}
          onClickIncrement={onClickIncrement}
          onClickDecrement={onClickDecrement}
          onClickReset={onClickReset}
          onClickRemove={onClickRemove}
        />
      </React.Fragment>
    );
  }
}

export default Cart;
