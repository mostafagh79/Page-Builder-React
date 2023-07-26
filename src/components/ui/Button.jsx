

function Button(props) {
  return (
    <a href={props.href} className={`${props.className}`}>
        {props.content}
    </a>
  )
}

export  {Button}

