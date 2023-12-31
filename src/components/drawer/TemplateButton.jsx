function TemplateButton(props) {
  return (
    <button
      className="btn-solid btn-full whitespace-nowrap z-50"
      onClick={() => {
        props.setTemplate(props.id);
      }}
    >
      <p>{props.title}</p>
    </button>
  );
}

export default TemplateButton;
