"use client";
import { useState, useEffect } from "react";

function ListItem(props) {
  return(
    <li>
      <input 
        name="list-checkbox" 
        type="checkbox" 
        checked={props.checked} />
      <label>{props.value}</label>
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
