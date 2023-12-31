const Icon = (props) => {
  return (
    <a href={props.href} className="btn btn-solid" onClick={props.onClick}>
      <img src={props.iconSrc} alt={props.alt} className="icon" />
    </a>
  );
};

export default Icon;
