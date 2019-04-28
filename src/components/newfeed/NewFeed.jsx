import React from "react";
import Items from "./items/Items";

function NewFeed({ items, onClickAdd }) {
  return <Items items={items} onClickAdd={onClickAdd} />;
}

export default NewFeed;
