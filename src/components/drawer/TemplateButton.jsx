import { useNavigate } from "react-router-dom";

function TemplateButton(props) {
  const navigate = useNavigate();
  return (
    <button
      className="btn-solid btn-full whitespace-nowrap"
      onClick={() => {
        navigate(`${props.id}`);
      }}
    >
      <p>{props.title}</p>
    </button>
  );
}

export default TemplateButton;
