import React, { useState } from "react";
import Title from "./Title";
import Form from "./Form";
import Todo from "./Todo";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([{}]);

  function testFunction(event) {
    event.preventDefault();
    const newTodo = { _id: Date.now(), text: inputValue };
    setTodos([...todos, newTodo]);
    console.log(todos);
  }

  return (
    <div className="App">
      <Title />
      <Form testFunction={testFunction} />
      <Todo />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
