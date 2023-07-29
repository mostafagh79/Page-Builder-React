import React from "react";

function Item(props) {
  return (
    <div className="flex items-center justify-between w-full">
      <p>{props.title}</p>
      {props.children}
    </div>
  );
}

export default Item;
