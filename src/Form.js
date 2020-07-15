import React from "react";
import "./Form.css";

function Form({ testFunction }) {
  return (
    <div className="Form">
      <input type="text" placeholder="Type here..." className="inputToDo" />
      <input type="submit" onClick={testFunction} />
    </div>
  );
}

export default Form;
