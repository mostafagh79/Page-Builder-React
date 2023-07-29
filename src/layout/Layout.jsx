import TButtons from "../components/details/TButtons";
import TTexts from "../components/details/TTexts";
import SettingSideBar from "./SettingSideBar";
import TemplateNavbar from "./TemplateNavbar";
import TemplateSideBar from "./TemplateSideBar";
import { useState } from "react";
import DropBox from "../components/drawer/DropBox";

export const Templates = {
  Buttons: "buttons",
  Text: "text",
};

function Layout() {
  const [template, setTemplate] = useState(Templates.Buttons);
  const [showTemplateBar, setShowTemplateBar] = useState(true);
  const [showSettingBar, setShowSettingBar] = useState(true);

  function handleTemplateClick() {
    setShowTemplateBar((prevShowTemplateBar) => !prevShowTemplateBar);
  }

  function handleSettingClick() {
    setShowSettingBar((prevShowSettingBar) => !prevShowSettingBar);
  }

  return (
    <div className="bg-gray-300 h-screen w-full">
      <TemplateNavbar
        setShowSetting={handleSettingClick}
        setShowTemplate={handleTemplateClick}
      />
      <main className="relative w-full h-[calc(100%-56px)]">
        {showTemplateBar ? (
          <TemplateSideBar isOpen={true} setTemplate={setTemplate} />
        ) : (
          <TemplateSideBar isOpen={false} setTemplate={setTemplate} />
        )}
        <DropBox />

        {showSettingBar ? (
          <SettingSideBar isOpen={true}>
            {template === Templates.Buttons ? <TButtons /> : <TTexts />}
          </SettingSideBar>
        ) : (
          <SettingSideBar isOpen={false}>
            {template === Templates.Buttons ? <TButtons /> : <TTexts />}
          </SettingSideBar>
        )}
      </main>
    </div>
  );
}

export default Layout;
