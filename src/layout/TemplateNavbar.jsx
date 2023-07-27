import soroushlogo from "../assets/images/soroush.png"
import eye from "../assets/images/eye.svg"
import home from "../assets/images/home.svg"
import send from "../assets/images/send.svg"
import template from "../assets/images/template.svg"
import redo from "../assets/images/redo.svg"
import undo from "../assets/images/undo.svg"
import menu from "../assets/images/menu.svg"
import { Icon } from "./Icon"

function TemplateNavbar() {
  return (
    <header>
     <nav>
        <div className="nav--features">
          <a href="#">
            <img src={soroushlogo} alt="soroush logo" />
          </a>

          <div className="nav--features--buttons">
            <Icon href={"#"} iconSrc={`${eye}`}></Icon>
            <Icon href={"#"} iconSrc={`${home}`}></Icon>
            <Icon href={"#"} iconSrc={`${send}`}></Icon>
              <a
              href="#"
              className="btn btn-solid block md:hidden"
              id="toggle-template"
            >
              <img
                src={template}
                alt="templeta icon"
                className="icon"
              />
            </a>
          </div>
        </div>
        <div className="nav--page-title">نام صفحه</div>
        <div className="nav--control-buttons">
            <Icon href={"#"} iconSrc={`${redo}`}></Icon>
            <Icon href={"#"} iconSrc={`${undo}`}></Icon>
          <button className="btn btn-solid block sm:hidden" id="toggle-setting">
            <img src={menu} alt="menu icon" className="icon" />
          </button>
        </div>
      </nav>
      </header>
  )
}

export {TemplateNavbar}