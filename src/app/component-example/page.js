const Component1 = ({ a, b }) => {
  return (
    <div>
      <div>{a}</div>
      <div>{b}</div>
      <div>{a + b}</div>
    </div>
  )
}

const StyledButton = (props) => {
  return (
   <button onClick={props.onClick}>
      {props.title}
   </button> 
  )
}

export default function Page() {
  return (
    <div>
      <Component1 a={1} b={"2"}/>
      <StyledButton title={"test"}/>
    </div>

  )
}