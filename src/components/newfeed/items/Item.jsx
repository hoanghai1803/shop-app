import React, { Component } from "react";

class Item extends Component {
  render() {
    const { item, onClickAdd } = this.props;
    const { name, src, price, button, message } = item;

    return (
      <React.Fragment>
        <p align="center">
          <img src={src} alt={name} />
          <br />
          <strong>{name}</strong>
          <br />
          {/* Add commas and unit to price */}
          <strong>
            Price:{" "}
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " rub"}
          </strong>
          <br />
          {/* If this button is clicked, it will call hanleClickAdd in App.js to
          set button's value to the appropriate value, then re-presentation button */}
          <button
            onClick={() => onClickAdd(this.props.item)}
            className={"btn btn-sm btn-" + button}
          >
            {message}
          </button>
        </p>
      </React.Fragment>
    );
  }
}

export default Item;
