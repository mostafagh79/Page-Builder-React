import TButtons from "../components/details/TButtons";
import TTexts from "../components/details/TText";
import SettingSideBar from "./SettingSideBar";
import Navbar from "./Navbar";
import TemplateSideBar from "./TemplateSideBar";
import { useState } from "react";
import PageBuilder from "../components/drawer/PageBuilder";
import Main from "./Main";

export const Templates = {
  Buttons: "buttons",
  Text: "text",
};

function Layout({ children }) {
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
      <Navbar
        setShowSetting={handleSettingClick}
        setShowTemplate={handleTemplateClick}
      />

      <Main
        showSettingBar={showSettingBar}
        showTemplateBar={showTemplateBar}
        setTemplate={setTemplate}
        template={template}
      >
        {children}
      </Main>
    </div>
  );
}

function Layoutt() {
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
