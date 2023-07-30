import React from "react";
import TemplateSideBar from "./TemplateSideBar";
import PageBuilder from "../components/drawer/PageBuilder";
import SettingSideBar from "./SettingSideBar";
import { useLocation } from "react-router-dom";

function Main(props) {
  const pathName = useLocation().pathname.slice(1);

  return (
    <main className="relative w-full h-[calc(100%-56px)]">
      {props.showTemplateBar ? (
        <TemplateSideBar isOpen={true} setTemplate={props.setTemplate} />
      ) : (
        <TemplateSideBar isOpen={false} setTemplate={props.setTemplate} />
      )}

      <PageBuilder />

      {props.showSettingBar ? (
        <SettingSideBar isOpen={true}>{props.children}</SettingSideBar>
      ) : (
        <SettingSideBar isOpen={false}>{props.children}</SettingSideBar>
      )}
    </main>
  );
}

export default Main;
