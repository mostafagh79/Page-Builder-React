import React from "react";
import hand from "../../../assets/images/icons/hand.svg";
import edit from "../../../assets/images/icons/edit.svg";
import trash from "../../../assets/images/icons/trash.svg";

function ItemWrapper(props) {
  return (
    <div className="w-full relative border border-yellow-400 rounded-xl rounded-tr-none p-1 flex justify-center my-5">
      <div className="absolute border border-yellow-400 rounded-xl rounded-br-none h-5 -top-5 flex gap-2 -right-[1px] px-[2px] items-center">
        <img className="w-4 h-4 cursor-pointer" src={trash} />
        <img className="w-4 h-4 cursor-pointer" src={hand} />
        <img className="w-4 h-4 cursor-pointer" src={edit} />
      </div>
      {props.children}
    </div>
  );
}

export default ItemWrapper;
