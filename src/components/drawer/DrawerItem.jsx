import React from "react";

function DrawerItem(props) {
  return (
    <div className="flex items-center justify-between w-full h-10">
      <p>{props.title}</p>
      {props.children}
    </div>
  );
}

export default DrawerItem;
