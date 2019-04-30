import React from "react";
import Item from "./Item";

const Items = props => {
  const {
    items,
    onClickLike,
    currentCategory,
    onClickAdd,
    currentValueNav
  } = props;

  return (
    <React.Fragment>
      {/* Just keep items which are in the current category.
      If favorites on bottom navigation is actived, only keep items are liked.
      If discount on bottom navigation is actived, only keep items are discounted.
      For each item, we will call "Item" component to render it */}
      {items
        .filter(
          item => item.category === currentCategory || currentCategory === "All"
        )
        .filter(
          item =>
            currentValueNav === 0 ||
            (currentValueNav === 1 && item.liked) ||
            (currentValueNav === 2 && item.discounted)
        )
        .map(item => (
          <Item
            key={item.id}
            item={item}
            onClickLike={onClickLike}
            onClickAdd={onClickAdd}
          />
        ))}
    </React.Fragment>
  );
};

export default Items;
