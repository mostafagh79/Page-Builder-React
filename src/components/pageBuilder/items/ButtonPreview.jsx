import React from "react";
import ItemWrapper from "./ItemWrapper";

function ButtonPreview(props) {
  return (
    <ItemWrapper>
      <a href={props.link} className='select-none' target='_blank'>
      <button style={...props.styles}>{props.innerText}</button>
      </a>
    </ItemWrapper>
  );
}

export default ButtonPreview;
