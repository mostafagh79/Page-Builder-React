import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStyle } from "../../store/settingSlice";
function ColorBox({ setting, field }) {
  const [showColorBox, setShowColorBox] = useState(false);
  const dispatch = useDispatch();

  function handleShowColors() {
    setShowColorBox((prevSetShowColorBox) => !prevSetShowColorBox);
  }

  function handleSelectColor(color) {
    handleShowColors();
    dispatch(updateStyle({ id: setting.id, field, value: color }));
  }

  return (
    <div className="relative w-32">
      <div
        className="absolute color-box border-[1px] border-gray-400 left-0 -top-3"
        onClick={handleShowColors}
        style={{ backgroundColor: setting.props.styles[field] }}
      ></div>

      {showColorBox && (
        <div className="absolute -top-1 w-32 z-50">
          <div
            className="w-0 h-0 absolute top-[22px] -left-[6px]
                border-l-[20px] border-l-transparent
                border-b-[20px] border-b-gray-500
                border-r-[20px] border-r-transparent"
          ></div>
          <div className="absolute top-8 -left-2 bg-gray-400 grid grid-rows-2 grid-cols-3 gap-1 p-2 rounded-xl">
            <div
              className="color-box"
              style={{ backgroundColor: "yellow" }}
              onClick={() => handleSelectColor("yellow")}
            ></div>
            <div
              className="color-box"
              style={{ backgroundColor: "green" }}
              onClick={() => handleSelectColor("green")}
            ></div>
            <div
              className="color-box"
              style={{ backgroundColor: "white" }}
              onClick={() => handleSelectColor("white")}
            ></div>
            <div
              className="color-box"
              style={{ backgroundColor: "red" }}
              onClick={() => handleSelectColor("red")}
            ></div>
            <div
              className="color-box"
              style={{ backgroundColor: "blue" }}
              onClick={() => handleSelectColor("blue")}
            ></div>
            <div
              className="color-box"
              style={{ backgroundColor: "black" }}
              onClick={() => handleSelectColor("black")}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorBox;
