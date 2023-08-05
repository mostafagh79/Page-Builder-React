import React, { useState } from "react";
import TemplateSideBar from "./TemplateSideBar";
import PageBuilder from "../components/pageBuilder/PageBuilder";
import SettingSideBar from "./SettingSideBar";
import { Templates } from "./Layout";
import TButtons from "../components/details/TButtons";
import TText from "../components/details/TText";

function Main(props) {
  return (
    <main className="relative w-full h-[calc(100%-56px)]">
      {
        <TemplateSideBar
          isOpen={props.showTemplateBar}
          setTemplate={props.setTemplate}
        />
      }

      <PageBuilder></PageBuilder>

      {
        <SettingSideBar isOpen={props.showSettingBar}>
          {props.template === Templates.Button ? <TButtons /> : <TText />}
        </SettingSideBar>
      }
    </main>
  );
}

export default Main;
