import React from "react";
import TemplateSideBar from "./TemplateSideBar";
import PageBuilder from "../components/pageBuilder/PageBuilder";
import SettingSideBar from "./SettingSideBar";
import { useLocation } from "react-router-dom";
import { Templates } from "./Layout";
import TButtons from "../components/details/TButtons";
import TText from "../components/details/TText";

function Main(props) {
  const pathName = useLocation().pathname.slice(1);

  return (
    <main className="relative w-full h-[calc(100%-56px)]">
      {props.showTemplateBar ? (
        <TemplateSideBar isOpen={true} setTemplate={props.setTemplate} />
      ) : (
        <TemplateSideBar isOpen={false} setTemplate={props.setTemplate} />
      )}

      <PageBuilder></PageBuilder>

      {props.showSettingBar ? (
        <SettingSideBar isOpen={true}>
          {props.template === Templates.Buttons ? <TButtons /> : <TText />}
        </SettingSideBar>
      ) : (
        <SettingSideBar isOpen={false}>
          {props.template === Templates.Buttons ? <TButtons /> : <TText />}
        </SettingSideBar>
      )}
    </main>
  );
}

export default Main;
