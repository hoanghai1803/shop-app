import React from "react";
import Item from "./Item";

function Items({ items, onClickAdd }) {
  return (
    <React.Fragment>
      {/* For each item, we will call "Item" component to render it */}
      {items.map(item => (
        <Item key={item.id} item={item} onClickAdd={onClickAdd} />
      ))}
    </React.Fragment>
  );
}

export default Items;
