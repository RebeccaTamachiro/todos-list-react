import React, { useState } from "react";
import Title from "./Title";
import Form from "./Form";
import Todo from "./Todo";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([{}]);

  function updateTodo(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = { _id: Date.now(), text: inputValue };
    setTodos([...todos, newTodo]);
    console.log(todos);
  }

  return (
    <div className="App">
      <Title />
      <Form updateTodo={updateTodo} handleSubmit={handleSubmit} />
      <Todo />
    </div>
  );
}

export default App;
