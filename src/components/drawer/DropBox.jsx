import DropBoxIcons from "./DropBoxIcons";
import pen from "../../assets/images/pen.png";
import up from "../../assets/images/up.png";
import down from "../../assets/images/down.png";
import lock from "../../assets/images/lock.png";
import trash from "../../assets/images/trash.png";
import plus from "../../assets/images/plus-sign.svg";

function DropBox() {
  return (
    <section id="page-builder" className="mx-auto h-full">
      <div
        id="main-wrapper"
        className="main-wrapper flex relative top-1/2 -translate-y-1/2"
      >
        <div>
          <div className="middle-div">
            <a className="upload-section">
              <div className="upload-section--plus">
                <img src={`${plus}`} alt="plus sign" />
              </div>
              <p className="text-blue-500">افزودن عکس</p>
            </a>
          </div>
          <button className="btn-under">+ افزودن صفحه</button>
        </div>
        <div className="flex--basic mr-3 gap-3">
          <DropBoxIcons
            alt={"pen"}
            iconSrc={`${pen}`}
            href={"#"}
          ></DropBoxIcons>
          <DropBoxIcons alt={"up"} iconSrc={`${up}`} href={"#"}></DropBoxIcons>
          <DropBoxIcons
            alt={"down"}
            iconSrc={`${down}`}
            href={"#"}
          ></DropBoxIcons>
          <DropBoxIcons
            alt={"lock"}
            iconSrc={`${lock}`}
            href={"#"}
          ></DropBoxIcons>
          <DropBoxIcons
            alt={"trash"}
            iconSrc={`${trash}`}
            href={"#"}
          ></DropBoxIcons>
        </div>
      </div>
    </section>
  );
}

export default DropBox;
