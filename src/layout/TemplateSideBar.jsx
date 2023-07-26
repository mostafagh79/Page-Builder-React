import { template } from "../../src/data/data"
import { TemplateButton } from "../components/drawer/TemplateButton"

function TemplateSideBar() {
  return (
     <section id="templates" className="side-bar">
        <h3 className="mb-4 mt-3 whitespace-nowrap">قالب ها</h3>
        {
        <div className="templates--wrapper">
      {template.map((template, index) => (
        <TemplateButton key={index} title={template.title} />
      ))}
    </div>
}
      </section>
  )
}

export  default TemplateSideBar