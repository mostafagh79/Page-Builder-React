function Input(props) {
  return (
    <div className={`flex ${props.className} `}>
      <label className="text-sm pr-1">{props.label}</label>
      <input
        className={`self-${props.dir} placeholder:text-xs border-[1px] border-light rounded-lg h-${props.height} w-${props.width} p-4`}
        dir="rtl"
        type={props.type}
        placeholder={props.placeholder}
      />
      <p className="text-xs">{props.paragraph}</p>
    </div>
  );
}

export default Input;
