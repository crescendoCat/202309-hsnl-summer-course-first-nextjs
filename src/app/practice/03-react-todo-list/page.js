"use client";
import { useState, useEffect } from "react";

function ListItem(props) {
  const [edit, setEdit] = useState(props.edit);
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setEdit(props.edit);
  }, [props.edit])
  useEffect(() => {
    setValue(props.value);
  }, [props.value])

  return(
    <li>
      <input 
        name="list-checkbox" 
        type="checkbox" 
        checked={props.checked} />
      <label>{value}</label>
    </li>  
  )

}

export default function Home() {
  return (
    <main>
      <h1>TODO List</h1>
      <ul>
        <ListItem value={"test1"} checked/>
        <ListItem value={"test2"}/>
        <ListItem value={"test3"}/>
    </ul>
    </main>
  )
}
