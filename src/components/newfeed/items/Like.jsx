import React from "react";

const Like = ({ item, onClickLike }) => {
  const link = item.liked ? "color" : "ios";
  return (
    <img
      onClick={() => onClickLike(item)}
      style={{ cursor: "pointer" }}
      src={"https://img.icons8.com/" + link + "/48/000000/hearts.png"}
      alt="Like"
    />
  );
};

export default Like;
