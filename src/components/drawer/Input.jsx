import React from "react";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  " h-10 flex justify-center items-center border border-gray-300 rounded-lg focus:border-blue-900  focus:outline-none",
  {
    variants: {
      width: {
        small: "w-10 text-center",
        full: "w-full text-right px-4",
      },
    },
    defaultVariants: {
      width: "small",
    },
  }
);

function Input({ width, placeholder, children }) {
  return (
    <input
      className={inputVariants({ width })}
      type="number"
      maxLength={2}
      min={2}
      max={30}
      placeholder={placeholder}
    />
  );
}

export default Input;
