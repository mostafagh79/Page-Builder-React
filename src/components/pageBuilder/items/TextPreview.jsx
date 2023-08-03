import React from "react";
import ItemWrapper from "./ItemWrapper";

function TextPreview(props) {
  const style = {};

  return (
    <ItemWrapper>
      <a href={props.link} className='select-none' target='_blank'>
      <p style={...props.styles}>{props.innerText}</p>
      </a>
    </ItemWrapper>
  );
}

export default TextPreview;
