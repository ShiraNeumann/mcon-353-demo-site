import { CheckBox } from "@mui/icons-material";
import React, { useState } from "react";

export const Todo = () => {
  const [input, setInput] = useState(""); //use hook for keeping track of state
  const [todos, setTodos] = useState([]);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addToDo = () => {
    //use the setTodos method to create new array instead of mutating the data, so that the page knows to rerender
    setTodos([...todos, input]); //create a new array with everything in the old array with the new data
  };

  const deleteTodo = () => {};
  return (
    <>
      <h1>To dos:</h1>
      <input onInput={onInput} />
      <button onClick={addToDo}>Add</button>
      {
        //injecting javaScript
        todos.map((todo) => (
          <p>
            <input type="checkbox" />
            {todo}
          </p>
        )) //transform the items with map
      }
    </>
  );
};
