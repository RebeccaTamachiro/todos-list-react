import React from "react";
import "./Form.css";

function Form({ updateTodo, handleSubmit }) {
  return (
    <div className="Form">
      <input
        type="text"
        placeholder="Type here..."
        className="inputToDo"
        onChange={updateTodo}
      />
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
}
export default Form;
