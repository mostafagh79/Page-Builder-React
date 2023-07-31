import React from "react";
import plus from "../../assets/images/plus-sign.svg";

function DropBox(props) {
  return (
    <a className="border-2 border-dashed border-blue-400 flex justify-center items-center p-4 rounded-lg w-full h-fit flex-col space-y-2 cursor-pointer">
      <div>
        <img src={plus} alt="plus sign" />
      </div>
      <p className="text-blue-500 font-bold">{props.title}</p>
    </a>
  );
}

export default DropBox;
