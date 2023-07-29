import { useState } from "react"
function ColorBox() {

  const [showColorBox, setShowColorBox] = useState(false)

  function handleClick() {
    setShowColorBox(prevSetShowColorBox => !prevSetShowColorBox)
  }

  return (
    <div className="relative w-32">
      <div
        className="absolute color-box border-[1px] border-gray-400 bg-white left-[18px]"
        onClick={handleClick}
      ></div>

      {showColorBox && (
        <div className="absolute top-1 w-32 transition-all duration-300 h-0">
          <div
            className="w-0 h-0 absolute top-[25px] left-3
                border-l-[20px] border-l-transparent
                border-b-[20px] border-b-gray-200
                border-r-[20px] border-r-transparent"
          ></div>
          <div className="absolute top-8 left-0 bg-gray-200 grid grid-rows-2 grid-cols-3 gap-1 p-2 rounded-xl">
            <div className="color-box bg-yellow-500"></div>
            <div className="color-box bg-orange-500"></div>
            <div className="color-box bg-red-500"></div>
            <div className="color-box bg-white"></div>
            <div className="color-box bg-green-500"></div>
            <div className="color-box bg-black"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorBox