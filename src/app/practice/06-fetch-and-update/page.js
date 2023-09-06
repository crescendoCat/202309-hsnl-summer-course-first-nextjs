"use client";
import { useState, useEffect } from "react";
import { 
  fetchTodoList,
  updateTodoList
} from "@/api/practice/06-fetch-and-update";

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
  const [list, setList]  = useState(null);
  const handleChange = (idx, v) => {
    let newList = [...list];
    newList[idx] = v;
    setList(newList);
  }
  const handleAddItem = () => {
    let newList = [...list, ""];
    setList(newList);
  }

  useEffect(() => {
    fetchTodoList().then(data => {
      // data會長這樣:
      // {"listItems":["test1", "test2", "..."]}
      setList(data.listItems);
    })
  }, []);

  useEffect(() => {
    if(list !== null);
      updateTodoList(list);
  }, [list]);
  return (
    <ul>
      {
        list && list.map((item, idx) => 
          <ListItem 
            key={`list-item-${idx}`}
            value={item} 
            onChange={(v) => handleChange(idx, v)}/>
        )
      }
      <li><button onClick={handleAddItem}>add</button></li>
    </ul>
  )
}

export default function Home() {
  
  return (
    <main>
      <small>06-fetch-and-update</small>
      <h1>TODO List</h1>
      <TodoList />
    </main>
  )
}