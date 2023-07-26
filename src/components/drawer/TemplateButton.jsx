
function TemplateButton(props) {
  return  (
    <button className="btn-solid btn-full whitespace-nowrap">
      <p>{props.title}</p>
    </button>
  );
}

export  {TemplateButton}