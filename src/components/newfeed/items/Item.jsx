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
          <strong>Price: {price}</strong>
          <br />
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
