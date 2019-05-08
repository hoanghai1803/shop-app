import React, { Component } from "react";
import Like from "./Like";

class Item extends Component {
  formatPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " rub";
  };

  render() {
    const { item, onClickLike, onClickAdd } = this.props;

    const {
      name,
      src,
      price,
      button,
      label,
      discounted,
      originalPrice,
      discountRate
    } = item;

    return (
      <p>
        <img src={src} alt={name} />
        <br />
        <strong>{name}</strong>
        <br />
        {/* Add commas and unit to price */}
        <strong>
          {discounted && (
            <i>
              <s>Original price: {this.formatPrice(originalPrice)}</s>
            </i>
          )}
          <br />
          Price: {this.formatPrice(price)}{" "}
          {discounted && (
            <i>
              <span className="badge badge-pill badge-warning">
                -{discountRate}%
              </span>
            </i>
          )}
        </strong>
        <br />
        <Like item={item} onClickLike={onClickLike} />
        {/* If this button is clicked, it will call hanleClickAdd in App.js to
            set button's value to the appropriate value, then re-present button */}
        <button
          onClick={() => onClickAdd(item)}
          className={"btn btn-" + button}
        >
          {label}
        </button>
      </p>
    );
  }
}

export default Item;
