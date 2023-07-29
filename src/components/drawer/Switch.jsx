import { useState } from "react";

function Switch() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center h-fit justify-between w-56 ">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              isChecked ? "bg-blue-700" : "bg-slate-500"
            }`}
          ></div>
          <div
            className={`switch ${isChecked ? "translate-x-full" : ""}`}
          ></div>
        </div>
      </label>
    </>
  );
}

export default Switch;
