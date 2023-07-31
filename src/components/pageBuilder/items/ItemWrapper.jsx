import React from "react";
import hand from "../../../assets/images/icons/hand.svg";
import edit from "../../../assets/images/icons/edit.svg";
import trash from "../../../assets/images/icons/trash.svg";

function ItemWrapper(props) {
  return (
    <div className="w-full relative border border-yellow-400 rounded-2xl rounded-tr-none p-2">
      <div className="absolute border border-yellow-400 rounded-2xl rounded-br-none h-7 -top-7 flex gap-2 -right-[1px]">
        <img className="w-5 h-5 cursor-pointer" src={trash} />
        <img className="w-5 h-5 cursor-pointer" src={hand} />
        <img className="w-5 h-5 cursor-pointer" src={edit} />
      </div>
      {props.children}
    </div>
  );
}

export default ItemWrapper;
