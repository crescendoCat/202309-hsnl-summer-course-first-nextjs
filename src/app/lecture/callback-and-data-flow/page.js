"use client";
import { useState, useEffect } from "react";

function ListItem(props) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(props.value);

  const handleChange=(event) => {
    if(props.onChange && typeof props.onChange === "function") {
        props.onChange(event.target.value);
    }
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
  const [list, setList]  = useState(["test", "test2", "test3"]);
  const handleChange = (idx, v) => {
    let newList = [...list];
    newList[idx] = v;
    setList(newList);
  }
  return (
    <ul>
      {
        list.map((item, idx) => 
          <ListItem 
            key={`list-item-${idx}`}
            value={item} 
            onChange={(v) => handleChange(idx, v)}/>
        )
      }
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