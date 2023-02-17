import React, { useState } from "react";

export const Todo = () => {
  const [input, setInput] = useState(""); //use hook for keeping track of state
  const [todos, setTodos] = useState([
    { title: "first", isComplete: false },
    { title: "second", isComplete: true },
  ]);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addToDo = () => {
    //use the setTodos method to create new array instead of mutating the data, so that the page knows to rerender
    setTodos([...todos, { title: input, isComplete: false }]); //create a new array with everything in the old array with the new data
    setInput("");
  };

  const toggleChecked = (todo) => {
    const newTodos = [...todos];
    const updatedTodo = newTodos.find((x) => x.title === todo.title);
    updatedTodo.isComplete = !updatedTodo.isComplete;
    setTodos(newTodos);
  };

  const deleteTodo = () => {};
  return (
    <>
      <h1>To dos:</h1>
      <input onInput={onInput} value={input} />
      <button onClick={addToDo}>Add</button>
      {
        //injecting javaScript
        todos.map((todo, index) => (
          <p key={index}>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => toggleChecked(todo)}
            />
            {todo.title}
          </p>
        )) //transform the items with map
      }
    </>
  );
};
