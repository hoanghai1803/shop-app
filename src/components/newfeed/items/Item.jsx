import React from "react";
import Like from "./Like";

const Item = ({ item, onClickLike, onClickAdd }) => {
  const { name, src, price, button, label } = item;

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
        <Like item={item} onClickLike={onClickLike} />
        {/* If this button is clicked, it will call hanleClickAdd in App.js to
          set button's value to the appropriate value, then re-presentation button */}
        <button
          onClick={() => onClickAdd(item)}
          className={"btn btn-" + button}
        >
          {label}
        </button>
      </p>
    </React.Fragment>
  );
};

export default Item;
