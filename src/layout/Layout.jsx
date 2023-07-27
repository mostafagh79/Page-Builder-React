import { Switch } from "../components/drawer/Switch"
import { TemplateNavbar } from "./TemplateNavbar"
import  TemplateSideBar  from "./TemplateSideBar"
Switch

function Layout() {
  return (
    <div className="bg-gray-300 h-screen w-full">
        <TemplateNavbar/>
        <main className="relative w-full h-[calc(100%-56px)]"><TemplateSideBar/>
        <Switch/>
        </main>
    </div>
  )
}

export {Layout}