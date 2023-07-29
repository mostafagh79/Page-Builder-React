import { template } from "../../src/data/data";
import { TemplateButton } from "../components/drawer/TemplateButton";

function TemplateSideBar(props) {
  return (
    <section
      className={`h-full bg-white shadow-xl shadow-gray-500 ${
        props.isOpen ? "w-40 p-4" : "w-0"
      } md:w-36 md:p-4 overflow-x-hidden right-0 z-10 absolute md:relative md:relative transition-all duration-300`}
    >
      <h3 className="mb-4 mt-3 whitespace-nowrap">قالب ها</h3>
      {
        <div className="flex flex-col justify-center items-center space-y-3">
          {template.map((template) => (
            <TemplateButton
              key={template.id}
              id={template.id}
              title={template.title}
              setTemplate={props.setTemplate}
            />
          ))}
        </div>
      }
    </section>
  );
}

export default TemplateSideBar;
