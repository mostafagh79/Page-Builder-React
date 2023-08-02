import React from "react";
import { cva } from "class-variance-authority";
import { useDispatch, useSelector } from "react-redux";
import { saveSettings } from "../../store/settingSlice";

const inputVariants = cva(
  "h-10 flex justify-center items-center border border-gray-300 rounded-lg focus:border-blue-900  focus:outline-none focus-within:border-blue-900",
  {
    variants: {
      width: {
        small: "w-10 text-center",
        full: "w-full text-right px-4 ",
      },
    },
    defaultVariants: {
      width: "small",
    },
  }
);

function Input({
  width,
  placeholder,
  type,
  children,
  onChange,
  value,
  setting,
}) {
  const dispatch = useDispatch();

  return (
    <div className={inputVariants({ width })}>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full h-full focus:outline-none rounded-lg text-center ${
          width === "full" ? "text-right" : ""
        }`}
        onBlur={() => {
          dispatch(saveSettings(setting.id, setting));
        }}
        onChange={onChange}
        value={value}
      />
      {children}
    </div>
  );
}

export default Input;
