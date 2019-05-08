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
        {/* Add commas and unit to price */}
        Price: {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
          " rub"}{" "}
        *<span className={this.getBadgeClasses()}>{quantity}</span>
        <br />
        <div className="row">
          <div className="col-1">
            {/* This will call handleClickIncrement() in App.js */}
            <button
              onClick={() => onClickIncrement(item)}
              className="btn btn-success"
            >
              +
            </button>
          </div>
          <div className="col-1">
            {/* This will call handleClickDecrement() function in App.js */}
            <button
              onClick={() => onClickDecrement(item)}
              className="btn btn-info"
              // If the quantity equal 0, we cannot continue decrease it
              disabled={quantity === 0 ? "disabled" : ""}
            >
              -
            </button>
          </div>
          <div className="col-2">
            {/* This will call handleClickReset() in App.js */}
            <button
              onClick={() => onClickReset(item)}
              className="btn btn-warning"
              // If the quantity equal 0, we cannot reset it
              disabled={quantity === 0 ? "disabled" : ""}
            >
              Reset
            </button>
          </div>
          <div className="col">
            {/* This will call handleClickRemove() in App.js */}
            <button
              onClick={() => onClickRemove(item)}
              className="btn btn-danger m-2"
            >
              Remove
            </button>
          </div>
        </div>
      </h1>
    );
  }
}

export default Counter;
