import React, { Component } from "react";

class Counter extends Component {
  // If quantity = 0, button will be set to "warning" class,
  // otherwise it will be changed to "success" class
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.item.quantity === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    const {
      item,
      onClickIncrement,
      onClickDecrement,
      onClickReset,
      onClickRemove
    } = this.props;

    const { name, price, quantity } = item;

    return (
      <h1>
        Name: {name}
        <br />
        Price: {price} *
        <span className={this.getBadgeClasses()}>{quantity}</span>
        <br />
        {/* This will call handleClickIncrement() in App.js */}
        <button
          onClick={() => onClickIncrement(item)}
          className="btn btn-success btn-sm"
        >
          +
        </button>
        {/* This will call handleClickDecrement() function in App.js */}
        <button
          onClick={() => onClickDecrement(item)}
          className="btn btn-info btn-sm"
        >
          -
        </button>
        {/* This will call handleClickReset() in App.js */}
        <button
          onClick={() => onClickReset(item)}
          className="btn btn-warning btn-sm"
        >
          Reset
        </button>
        {/* This will call handleClickRemove() in App.js */}
        <button
          onClick={() => onClickRemove(item)}
          className="btn btn-danger btn-sm m-2"
        >
          Remove
        </button>
      </h1>
    );
  }
}

export default Counter;
