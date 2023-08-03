import DrawerItem from "../drawer/DrawerItem";
import DetailTitle from "./DetailTitle";
import Input from "../drawer/Input";
import DropDown from "../drawer/DropDown";
import TextAlignment from "../drawer/TextAlignment";
import ColorBox from "../drawer/ColorBox";
import Typography from "../drawer/Typography";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveSettings,
  updateSettings,
  updateStyle,
} from "../../store/settingSlice";

function TText() {
  const id = "KSLDJFKSKJLLKJEWT_324KSLJA";
  const { settings: settings } = useSelector((store) => store.settings);
  const setting = settings.find((setting) => setting.id === id);
  const dispatch = useDispatch();

  const handleSettingChange = (id, field) => (event) => {
    const { value } = event.target;
    dispatch(updateSettings({ id, field, value }));
  };

  const handlePixelStyleChange = (id, field) => (event) => {
    let { value } = event.target;
    value += "px";
    dispatch(updateStyle({ id, field, value }));
  };

  return (
    <div className="space-y-4">
      <DetailTitle>متن</DetailTitle>
      <TextAlignment />

      <DrawerItem title="نوع متن">
        <DropDown
          items={
            new Map([
              ["عنوان", "heading"],
              ["پاراگراف", "paragraph"],
            ])
          }
          z="above"
          // field="borderRadius"
          settings={setting}
        />
      </DrawerItem>

      <DrawerItem title="نوع عنوان">
        <DropDown
          items={
            new Map([
              ["عنوان H1", "H1"],
              ["عنوان H2", "H2"],
              ["عنوان H3", "H3"],
            ])
          }
          // field="borderRadius"
          settings={setting}
          z="default"
        />
      </DrawerItem>

      <div>
        <DrawerItem title="متن مورد نظر خود را وارد کنید" />
        <textarea
          className="h-48 resize-none w-full px-4 py-2 flex justify-center items-center border border-gray-300 rounded-lg focus:border-blue-900  focus:outline-none"
          placeholder="برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
          onBlur={() => {
            dispatch(saveSettings(setting.id, setting));
          }}
          onChange={handleSettingChange(setting.id, "innerText")}
          value={setting.props.innerText}
        />
      </div>

      <Typography setting={setting} />

      <DrawerItem title="رنگ ">
        <ColorBox setting={setting} field="color" />
      </DrawerItem>

      <DrawerItem title="سایز فونت">
        <DropDown
          items={
            new Map([
              ["۱۰", "10px"],
              ["۱۴", "14px"],
              ["۱۹", "19px"],
              ["۲۵", "25px"],
              ["۳۲", "32px"],
              ["۴۰", "40px"],
            ])
          }
          z="default"
          field="fontSize"
          settings={setting}
          variant="small"
        />
      </DrawerItem>

      <DrawerItem title="ارتفاع خطوط">
        <DropDown
          items={
            new Map([
              ["۱۴", "14px"],
              ["۲۰", "20px"],
              ["۲۸", "28px"],
              ["۳۸", "38px"],
              ["۵۰", "50px"],
            ])
          }
          z="default"
          field="lineHeight"
          settings={setting}
          variant="small"
        />
      </DrawerItem>

      <DrawerItem title="حاشیه">
        <Input
          type="number"
          onChange={handlePixelStyleChange(id, "padding")}
          value={setting.props.styles.padding.slice(0, -2)}
          setting={setting}
        />
      </DrawerItem>

      <DrawerItem title="فاصله گذاری">
        <Input
          type="number"
          onChange={handlePixelStyleChange(id, "letterSpacing")}
          value={setting.props.styles.letterSpacing.slice(0, -2)}
          setting={setting}
        />
      </DrawerItem>

      <div>
        <DrawerItem title="لینک متن " />
        <Input
          width="full"
          type="text"
          placeholder="لینک مورد نظر خود را وارد کنید"
          onChange={handleSettingChange(id, "link")}
          value={setting.props.link}
          setting={setting}
        >
          <img
            src="../src/assets/images/link.svg"
            alt="A link icon"
            className="h-full w-4 mr-2"
          />
        </Input>
      </div>
    </div>
  );
}

export default TText;
