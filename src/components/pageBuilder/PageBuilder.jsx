import pen from "../../assets/images/pen.png";
import up from "../../assets/images/up.png";
import down from "../../assets/images/down.png";
import lock from "../../assets/images/lock.png";
import trash from "../../assets/images/trash.png";
import DropBox from "./DropBox";
import Icon from "../../layout/Icon";
import ButtonPreview from "./items/ButtonPreview";

function PageBuilder(props) {
  return (
    <section className="mx-auto h-full">
      <div className="h-[95%] w-96 mx-auto px-2 flex relative top-1/2 -translate-y-1/2">
        <div>
          <div className="bg-white h-[90%] w-80 p-4 rounded">
            <DropBox title="یک قالب را بکشید و رها کنید" />
            <ButtonPreview />
          </div>
          <button className="btn-under">+ افزودن صفحه</button>
        </div>
        <div className="flex--basic mr-3 gap-3">
          <Icon alt="pen" iconSrc={pen} href="#" />
          <Icon alt="up" iconSrc={up} href="#" />
          <Icon alt="down" iconSrc={down} href="#" />
          <Icon alt="lock" iconSrc={lock} href="#" />
          <Icon alt="trash" iconSrc={trash} href="#" />
        </div>
      </div>
    </section>
  );
}

export default PageBuilder;
