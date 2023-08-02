import Icon from "../../layout/Icon";
import textAlignJustifyCenter from "../../assets/images/text-align-justify-light.svg";
import textAlignLeft from "../../assets/images/text-align-left-fill.svg";
import textAlignCenter from "../../assets/images/text-center.svg";
import textAlignRight from "../../assets/images/text-right.svg";
import textBold from "../../assets/images/bold-text-outline-icon.svg";
import textItalic from "../../assets/images/text-italic-thin.svg";
import textUnderline from "../../assets/images/text-underline-thin.svg";
import { useDispatch } from "react-redux";
import { updateStyle } from "../../store/settingSlice";

function DownSideAlignment({ setting }) {
  const dispatch = useDispatch();
  const id = setting.id;
  return (
    <div className="flex justify-between gap-1 h-fit  mt-4">
      <Icon
        href="#"
        alt="textalign-justifycenter"
        iconSrc={textAlignJustifyCenter}
        onClick={() =>
          dispatch(updateStyle({ id, field: "textAlign", value: "justify" }))
        }
      />
      <Icon
        href="#"
        alt="textalign-left"
        iconSrc={textAlignRight}
        onClick={() =>
          dispatch(updateStyle({ id, field: "textAlign", value: "right" }))
        }
      />

      <Icon
        href="#"
        alt="textalign-center"
        iconSrc={textAlignCenter}
        onClick={() =>
          dispatch(updateStyle({ id, field: "textAlign", value: "center" }))
        }
      />
      <Icon
        href="#"
        alt="textalign-right"
        iconSrc={textAlignLeft}
        onClick={() =>
          dispatch(updateStyle({ id, field: "textAlign", value: "left" }))
        }
      />

      <Icon
        href="#"
        alt="text-bold"
        iconSrc={textBold}
        onClick={() => {
          const value =
            setting.props.styles.fontWeight === "bold" ? "normal" : "bold";
          dispatch(updateStyle({ id, field: "fontWeight", value }));
        }}
      />

      <Icon
        href="#"
        alt="text-italic"
        iconSrc={textItalic}
        onClick={() => {
          const value =
            setting.props.styles.fontStyle === "italic" ? "normal" : "italic";
          dispatch(updateStyle({ id, field: "fontStyle", value }));
        }}
      />
      <Icon
        href="#"
        alt="text-underline"
        iconSrc={textUnderline}
        onClick={() => {
          const value =
            setting.props.styles.textDecoration === "underline"
              ? "none"
              : "underline";
          dispatch(updateStyle({ id, field: "textDecoration", value }));
        }}
      />
    </div>
  );
}

export default DownSideAlignment;
