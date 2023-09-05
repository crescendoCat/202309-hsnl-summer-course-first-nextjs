"use client";
import { useState, useEffect } from "react";

function ListItem(props) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(props.value);

  const handleChange=(event) => {
    setValue(event.target.value);
  }

  return(
    <li onClick={() => setEdit(true)}>
      <input 
        name="list-checkbox" 
        type="checkbox" 
        checked={props.checked} />
      {
        edit
        ? <input
            autoFocus
            name="list-input"
            type="text"
            value={value}
            onChange={handleChange}
            onBlur={() => setEdit(false)}>
          </input>
        : <label>{value}</label>
      }
    </li>  
  )

}


function TodoList() {
  return (
    <ul>
      <ListItem value={"test1"} checked/>
      <ListItem value={"test2"}/>
      <ListItem value={"test3"}/>
    </ul>
  )
}

export default function Home() {
  return (
    <main>
      <h1>TODO List</h1>
      <TodoList />
    </main>
  )
}