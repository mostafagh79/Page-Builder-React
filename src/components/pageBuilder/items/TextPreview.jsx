import React from "react";
import ItemWrapper from "./ItemWrapper";

const defaultValues = {
  link: "#",
  innerText:
    "این یک متن ساختگی است. لورم ایپسوم یک متن ساختگی برای استفاده در صنعت است.",
  textType: "header",
  headerType: "",
  styles: {
    color: "black",
    fontSize: "15px",
    lineHeight: "50px",
    textAlign: "center",
    borderWidth: "0px",
    padding: "2px",
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    borderRadius: "H2",
    undefined: "paragraph",
  },
};

function TextPreview(props) {
  const data = Object.keys(props).length === 0 ? defaultValues : props;
  return (
    <ItemWrapper>
      <a href={data.link} className="select-none" target="_blank">
        <p style={data.styles}>{data.innerText}</p>
      </a>
    </ItemWrapper>
  );
}

export default TextPreview;
