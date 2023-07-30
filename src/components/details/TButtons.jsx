import DrawerItem from "../drawer/DrawerItem";
import DetailTitle from "./DetailTitle";
import Input from "../drawer/Input";
import DropDown from "../drawer/DropDown";
import TextAlignment from "../drawer/TextAlignment";
import Typography from "../drawer/Typography";
import ColorBox from "../drawer/ColorBox";
import Switch from "../drawer/Switch";

function TButtons() {
  return (
    <div className="space-y-4">
      <DetailTitle>دکمه ها</DetailTitle>
      <TextAlignment />

      <DrawerItem title="فونت">
        <Input />
      </DrawerItem>

      <DrawerItem title="اندازه دکمه">
        <DropDown
          items={["کوچک", "متوسط", "بزرگ"]}
          defaultValue="متوسط"
          z="above"
        />
      </DrawerItem>

      <DrawerItem title={"عرض دکمه"}>
        <DropDown
          items={["کوچک", "پیش فرض", "بزرگ"]}
          defaultValue="پیش فرض"
          z="default"
        />
      </DrawerItem>

      <DrawerItem title="حاشیه">
        <Input />
      </DrawerItem>

      <DrawerItem title="فاصله گذاری">
        <Input />
      </DrawerItem>

      <DrawerItem title="گوشه ها">
        <DropDown
          items={["۲", "۴", "۶", "۸"]}
          defaultValue="۴"
          z="9"
          variant="small"
        />
      </DrawerItem>

      <div>
        <DrawerItem title=" متن ۱" />
        <Input width="full" placeholder="لورم ایپسوم" />
        <Typography />
      </div>

      <DrawerItem title="رنگ پس زمینه">
        <ColorBox />
      </DrawerItem>

      <DrawerItem title="رنگ متن">
        <ColorBox />
      </DrawerItem>

      <DrawerItem title="آیکون دار">
        <Switch />
      </DrawerItem>

      <div>
        <DrawerItem title="لینک دکمه " />
        <Input width="full" placeholder="لینک مورد نظر خود را وارد کنید" />
      </div>
    </div>
  );
}

export default TButtons;
