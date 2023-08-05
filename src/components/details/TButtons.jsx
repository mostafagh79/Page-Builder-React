import DrawerItem from "../drawer/DrawerItem";
import DetailTitle from "./DetailTitle";
import Input from "../drawer/Input";
import DropDown from "../drawer/DropDown";
import TextAlignment from "../drawer/TextAlignment";
import Typography from "../drawer/Typography";
import ColorBox from "../drawer/ColorBox";
import Switch from "../drawer/Switch";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings, updateStyle } from "../../store/settingSlice";

function TButtons(props) {
  const id = "KSLDJFKSKJLLKJEWT_32L";
  const dispatch = useDispatch();
  const { settings: settings } = useSelector((store) => store.settings);

  // setting is an element's setting that user wants to change (In this case button's setting).
  const setting = settings.find((setting) => setting.id === id);

  const handlePixelStyleChange = (id, field) => (event) => {
    let { value } = event.target;
    value += "px";
    dispatch(updateStyle({ id, field, value }));
  };

  const handleSettingChange = (id, field) => (event) => {
    const { value } = event.target;
    dispatch(updateSettings({ id, field, value }));
  };

  return (
    <div className="space-y-4">
      <DetailTitle>دکمه ها</DetailTitle>
      <TextAlignment />

      <DrawerItem title="فونت">
        <Input
          type="number"
          onChange={handlePixelStyleChange(id, "fontSize")}
          value={setting.props.styles.fontSize.slice(0, -2)}
          setting={setting}
        />
      </DrawerItem>

      <DrawerItem title="اندازه دکمه">
        <DropDown
          items={
            new Map([
              ["کوچک", "100px"],
              ["متوسط", "180px"],
              ["بزرگ", "250px"],
            ])
          }
          z="above"
          field="width"
          settings={setting}
        />
      </DrawerItem>

      <DrawerItem title={"عرض دکمه"}>
        <DropDown
          items={
            new Map([
              ["کوچک", "40px"],
              ["متوسط", "70px"],
              ["بزرگ", "100px"],
            ])
          }
          z="default"
          field="height"
          settings={setting}
        />
      </DrawerItem>

      <DrawerItem title="حاشیه">
        <Input
          type="number"
          onChange={handlePixelStyleChange(id, "borderWidth")}
          value={setting.props.styles.borderWidth.slice(0, -2)}
          setting={setting}
        />
      </DrawerItem>

      <DrawerItem title="فاصله گذاری">
        <Input
          type="number"
          onChange={handlePixelStyleChange(id, "padding")}
          value={setting.props.styles.padding.slice(0, -2)}
          setting={setting}
        />
      </DrawerItem>

      <DrawerItem title="گوشه ها">
        <DropDown
          items={
            new Map([
              ["۰", "0px"],
              ["۴", "12px"],
              ["۶", "20px"],
              ["۸", "45px"],
              ["کامل", "50%"],
            ])
          }
          z="default"
          field="borderRadius"
          settings={setting}
          variant="small"
        />
      </DrawerItem>

      <div>
        <DrawerItem title=" متن ۱" />
        <Input
          width="full"
          placeholder="لورم ایپسوم"
          type="text"
          onChange={handleSettingChange(id, "innerText")}
          value={setting.props.innerText}
          setting={setting}
        />
        <Typography setting={setting} />
      </div>

      <DrawerItem title="رنگ پس زمینه">
        <ColorBox setting={setting} field="backgroundColor" />
      </DrawerItem>

      <DrawerItem title="رنگ متن">
        <ColorBox setting={setting} field="color" />
      </DrawerItem>

      <DrawerItem title="آیکون دار">
        <Switch />
      </DrawerItem>

      <div>
        <DrawerItem title="لینک دکمه " />
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

export default TButtons;
