import Navbar from "./Navbar";
import { useCallback, useMemo, useState } from "react";
import Main from "./Main";

export const Templates = {
  Button: "button",
  Text: "text",
};

function Layout({ children }) {
  const [template, setTemplate] = useState(Templates.Button);
  const [showTemplateBar, setShowTemplateBar] = useState(false);
  const [showSettingBar, setShowSettingBar] = useState(false);

  const handleTemplateClick = useCallback(() => {
    setShowTemplateBar((prevShowTemplateBar) => !prevShowTemplateBar);
  }, [showTemplateBar]);

  const handleSettingClick = useCallback(() => {
    setShowSettingBar((prevShowSettingBar) => !prevShowSettingBar);
  }, [showSettingBar]);

  const memorizedMain = useMemo(
    () => (
      <Main
        showSettingBar={showSettingBar}
        showTemplateBar={showTemplateBar}
        setTemplate={setTemplate}
        template={template}
      >
        {children}
      </Main>
    ),
    [template, showSettingBar, showTemplateBar]
  );

  return (
    <div className="bg-gray-300 h-screen w-full">
      <Navbar
        setShowSetting={handleSettingClick}
        setShowTemplate={handleTemplateClick}
      />

      {memorizedMain}
    </div>
  );
}

export default Layout;
