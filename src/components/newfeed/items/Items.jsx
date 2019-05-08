import React from "react";
import _ from "lodash";
import Item from "./Item";

const Items = props => {
  const {
    items,
    onClickLike,
    currentCategory,
    onClickAdd,
    currentValueNav,
    selectedValue
  } = props;

  // Sorting
  let sortedItems = items;
  // If sorting switch isn't actived, this will not sort items
  if (selectedValue !== "No Sort")
    sortedItems = _.orderBy(
      items,
      ["price"],
      selectedValue === "Increase" ? ["asc"] : ["desc"]
    );

  // Just keep items which are in the current category.
  // If favorites on bottom navigation is actived, only keep items are liked.
  // If discount on bottom navigation is actived, only keep items are discounted.
  const selectedItems = sortedItems
    .filter(
      item => item.category === currentCategory || currentCategory === "All"
    )
    .filter(
      item =>
        currentValueNav === 0 ||
        (currentValueNav === 1 && item.liked) ||
        (currentValueNav === 2 && item.discounted)
    );

  return (
    <React.Fragment>
      <h3>
        <i>
          Showing {selectedItems.length} item
          {selectedItems.length === 1 ? "" : "s"}
        </i>
      </h3>
      <br />
      {/* For each item, we will call "Item" component to render it */}
      {selectedItems.map(item => (
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
