"use client";
import { useState } from "react";

function ControlledComponent(props) {
  const [inputValue, setInputValue] = useState("");
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }
  
  return (
    <input 
    type="text"
    value={inputValue}
    onChange={handleChange}
    />
  )
}

export default function Page() {
  return (
    <>
      <h1>Controlled Component</h1>
      <ControlledComponent />
    </>
  )
}