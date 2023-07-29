import Icon from "../../layout/Icon";
import textAlignJustifyCenter from "../../assets/images/text-align-justify-light.svg";
import textAlignLeft from "../../assets/images/text-align-left-fill.svg";
import textAlignCenter from "../../assets/images/text-center.svg";
import textAlignRight from "../../assets/images/text-right.svg";
import textBold from "../../assets/images/bold-text-outline-icon.svg";
import textItalic from "../../assets/images/text-italic-thin.svg";
import textUnderline from "../../assets/images/text-underline-thin.svg";

function DownSideAlignment() {
  return (
    <div className="flex flex-row h-fit gap-3">
      <Icon
        href={"#"}
        alt={"textalign-justifycenter"}
        iconSrc={textAlignJustifyCenter}
      ></Icon>
      <Icon href={"#"} alt={"textalign-right"} iconSrc={textAlignLeft}></Icon>
      <Icon
        href={"#"}
        alt={"textalign-center"}
        iconSrc={textAlignCenter}
      ></Icon>
      <Icon href={"#"} alt={"textalign-left"} iconSrc={textAlignRight}></Icon>
      <Icon href={"#"} alt={"text-bold"} iconSrc={textBold}></Icon>
      <Icon href={"#"} alt={"text-italic"} iconSrc={textItalic}></Icon>
      <Icon href={"#"} alt={"text-underline"} iconSrc={textUnderline}></Icon>
    </div>
  );
}

export default DownSideAlignment;
