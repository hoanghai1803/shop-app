import React from "react";

const ListGroup = ({ categories, currentCategory, onClickCategory }) => {
  return (
    <div className="list-group">
      {categories.map(category => (
        <button
          key={category}
          type="button"
          className={
            category === currentCategory
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onClickCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ListGroup;
