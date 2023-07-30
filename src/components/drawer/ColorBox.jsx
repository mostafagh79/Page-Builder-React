import { useState } from "react";
function ColorBox() {
  const [showColorBox, setShowColorBox] = useState(false);

  function handleClick() {
    setShowColorBox((prevSetShowColorBox) => !prevSetShowColorBox);
  }

  return (
    <div className="relative w-32">
      <div
        className="absolute color-box border-[1px] border-gray-400 bg-white left-0 -top-3"
        onClick={handleClick}
      ></div>

      {showColorBox && (
        <div className="absolute -top-1 w-32 z-50">
          <div
            className="w-0 h-0 absolute top-[22px] -left-[6px]
                border-l-[20px] border-l-transparent
                border-b-[20px] border-b-gray-300
                border-r-[20px] border-r-transparent"
          ></div>
          <div className="absolute top-8 -left-2 bg-gray-300 grid grid-rows-2 grid-cols-3 gap-1 p-2 rounded-xl">
            <div className="color-box bg-yellow-400"></div>
            <div className="color-box bg-orange-500"></div>
            <div className="color-box bg-white"></div>
            <div className="color-box bg-green-500"></div>
            <div className="color-box bg-red-600"></div>
            <div className="color-box bg-black"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorBox;
