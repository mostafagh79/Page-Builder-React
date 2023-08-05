import React from "react";
import ItemWrapper from "./ItemWrapper";

const defaultValues = {
  link: "#",
  innerText: "لورم ایپسوم",
  hasIcon: false,
  styles: {
    fontSize: "20px",
    width: "180px",
    height: "70px",
    borderWidth: "0px",
    padding: "0px",
    borderRadius: "12px",
    textAlign: "center",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    backgroundColor: "yellow",
    color: "black",
  },
};

function ButtonPreview(props) {
  const data = Object.keys(props).length === 0 ? defaultValues: props;
  return (
    <ItemWrapper>
      <a href={data.link} className='select-none' target='_blank'>
      <button style={...data.styles}>{data.innerText}</button>
      </a>
    </ItemWrapper>
  );
}

export default ButtonPreview;
