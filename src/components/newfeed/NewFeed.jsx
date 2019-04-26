import React from "react";
import Items from "./items/Items";

function NewFeed(props) {
  const { items, onClickAdd } = props;
  return <Items items={items} onClickAdd={onClickAdd} />;
}

export default NewFeed;
