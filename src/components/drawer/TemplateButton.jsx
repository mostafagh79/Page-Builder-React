function TemplateButton(props) {
  return (
    <button
      className="btn-solid btn-full whitespace-nowrap"
      onClick={() => {
        props.setTemplate(props.id);
        console.log(props.id);
      }}
    >
      <p>{props.title}</p>
    </button>
  );
}

export { TemplateButton };
