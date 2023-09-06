"use client";
import { useState, useEffect, Suspense } from "react";
import { 
  fetchTodoList,
  updateTodoList
} from "@/api/practice/06-fetch-and-update";
import styles from "./page.module.css";

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
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    fetchTodoList().then(data => {
      // data會長這樣:
      // {"listItems":["test1", "test2", "..."]}
      setList(data.listItems);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    if(list !== null);
      updateTodoList(list).then(() => {
        setLoading(false);
      })
  }, [list]);
  return (
    <ul>
      <div className={`${styles.loading} ${loading ? styles.active : ""}`}>loading...</div>
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
      <small>07-loading</small>
      <h1>TODO List</h1>
      <TodoList />

    </main>
  )
}