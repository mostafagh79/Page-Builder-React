import React from "react";

function SettingSideBar(props) {
  return (
    <section
      className={`h-full bg-white shadow-xl shadow-gray-500 w-0 sm:w-[310px] sm:p-4 overflow-x-hidden overflow-y-auto space-y-5 left-0 absolute sm:relative  transition-all duration-300 ${
        props.isOpen ? "w-[310px] p-4" : ""
      }`}
    >
      {props.children}
    </section>
  );
}

export default SettingSideBar;
