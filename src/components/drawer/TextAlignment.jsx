import Icon from "../../layout/Icon";
import alignBottom from "../../assets/images/align-bottom.svg";
import alignHorizontally from "../../assets/images/align-horizontally.svg";
import alignLeft from "../../assets/images/align-left.svg";
import alignRight from "../../assets/images/align-right.svg";
import alignVertically from "../../assets/images/align-vertically.svg";
import linearFrame from "../../assets/images/linear-frame.svg";

function UpsideAlignment() {
  return (
    <div className="flex flex-row gap-3 h-fit justify-between">
      <Icon href={"#"} alt={"align bottom icon"} iconSrc={alignBottom}></Icon>
      <Icon
        href={"#"}
        alt={"align bottom icon"}
        iconSrc={alignHorizontally}
      ></Icon>
      <Icon href={"#"} alt={"align bottom icon"} iconSrc={alignLeft}></Icon>
      <Icon href={"#"} alt={"align bottom icon"} iconSrc={alignRight}></Icon>
      <Icon
        href={"#"}
        alt={"align bottom icon"}
        iconSrc={alignVertically}
      ></Icon>
      <Icon href={"#"} alt={"align bottom icon"} iconSrc={linearFrame}></Icon>
    </div>
  );
}

export default UpsideAlignment;
