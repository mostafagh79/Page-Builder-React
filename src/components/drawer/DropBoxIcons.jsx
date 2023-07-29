function DropBoxIcons(props) {
  return (
    <a href={props.href} className="btn-middle">
      <img src={props.iconSrc} alt={props.alt} />
    </a>
  );
}

export default DropBoxIcons;
