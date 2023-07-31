import DrawerItem from "../drawer/DrawerItem";
import DetailTitle from "./DetailTitle";
import Input from "../drawer/Input";
import DropDown from "../drawer/DropDown";
import TextAlignment from "../drawer/TextAlignment";
import ColorBox from "../drawer/ColorBox";
import Typography from "../drawer/Typography";

function TText() {
  return (
    <div className="space-y-4">
      <DetailTitle>متن</DetailTitle>
      <TextAlignment />

      <DrawerItem title="نوع متن">
        <DropDown
          items={["پاراگراف", "عنوان"]}
          defaultValue="عنوان"
          z="above"
        />
      </DrawerItem>

      <DrawerItem title="نوع عنوان">
        <DropDown
          items={["عنوان H1", "عنوان H2", "عنوان H3"]}
          defaultValue="عنوان H1"
          z="default"
        />
      </DrawerItem>

      <div>
        <DrawerItem title="متن مورد نظر خود را وارد کنید" />
        <textarea
          className="h-48 resize-none w-full px-4 py-2 flex justify-center items-center border border-gray-300 rounded-lg focus:border-blue-900  focus:outline-none"
          placeholder="برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
        />
      </div>

      <Typography />

      <DrawerItem title="رنگ ">
        <ColorBox />
      </DrawerItem>

      <DrawerItem title="سایز فونت">
        <DropDown
          items={["۱۶", "۱۸", "۲۰", "۲۲", "۲۴", "۲۶"]}
          defaultValue="۴"
          z="above"
          variant="small"
        />
      </DrawerItem>

      <DrawerItem title="ارتفاع خطوط">
        <DropDown
          items={["۲", "۴", "۶", "۸"]}
          defaultValue="۴"
          z="default"
          variant="small"
        />
      </DrawerItem>

      <DrawerItem title="حاشیه">
        <Input type="number" />
      </DrawerItem>

      <DrawerItem title="فاصله گذاری">
        <Input type="number" />
      </DrawerItem>

      <div>
        <DrawerItem title="لینک متن " />
        <Input
          width="full"
          type="text"
          placeholder="لینک مورد نظر خود را وارد کنید"
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
