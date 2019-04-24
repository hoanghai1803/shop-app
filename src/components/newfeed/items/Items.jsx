import React, { Component } from "react";
import Item from "./Item";

class Items extends Component {
  render() {
    const { items, onClickAdd } = this.props;

    return (
      <React.Fragment>
        {/* For each item, we will call "Item" component to render it */}
        {items.map(item => (
          <Item key={item.id} item={item} onClickAdd={onClickAdd} />
        ))}
      </React.Fragment>
    );
  }
}

export default Items;
