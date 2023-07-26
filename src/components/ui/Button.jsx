

function Button(props) {
  return (
    <button className={`${props.className}`}>
        {props.content}
    </button>
  )
}

export  {Button}

