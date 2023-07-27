import { DropBox } from "../components/drawer/DropBox"
import { TemplateNavbar } from "./TemplateNavbar"
import  TemplateSideBar  from "./TemplateSideBar"

function Layout() {
  return (
    <div className="bg-gray-300 h-screen w-full">
        <TemplateNavbar/>
        <main className="relative w-full h-[calc(100%-56px)]">
          <TemplateSideBar/>
          <DropBox/>
        </main>
        
    </div>
  )
}

export {Layout}