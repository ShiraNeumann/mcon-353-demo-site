import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import "./todo.css";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

export const Todo = () => {
  const [input, setInput] = useState(""); //use hook for keeping track of state
  const [todos, setTodos] = useState([]);

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
    if (updatedTodo.isComplete) {
      newTodos.push(newTodos.splice(newTodos.indexOf(updatedTodo), 1)[0]); //move to the bottom of the list if it is complete
    }
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  return (
    <>
      <Box sx={{ textAlign: "left", m: 10, maxWidth: "50%" }}>
        <Typography variant="h2" gutterBottom display="inline">
          To
          <Typography variant="h2" display="inline" sx={{ color: "purple" }}>
            Do
          </Typography>
        </Typography>
        <br />
        <TextField
          id="standard-basic"
          label="Enter task"
          variant="standard"
          color="secondary"
          display="block"
          onInput={onInput}
          value={input}
          sx={{ width: "75%" }}
        />

        <AddIcon onClick={addToDo} sx={{ verticalAlign: "bottom" }} />

        <Box
          sx={{
            width: "75%",
            bgcolor: "background.paper",
            display: "flex",
            justifyContent: "left",
          }}
        >
          <List sx={{ width: "100%" }}>
            {
              //injecting javaScript
              todos.map(
                (
                  todo,
                  index //transform the items with map
                ) => (
                  <ListItem
                    key={index}
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete" disableRipple>
                        <Checkbox
                          size="small"
                          color="secondary"
                          checked={todo.isComplete}
                          onChange={() => toggleChecked(todo)}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                        <DeleteOutlinedIcon onClick={() => deleteTodo(index)} />
                      </IconButton>
                    }
                  >
                    <ListItemButton onClick={() => toggleChecked(todo)}>
                      <ListItemText primary={todo.title} />
                    </ListItemButton>
                  </ListItem>
                )
              )
            }
          </List>
        </Box>
      </Box>
    </>
  );
};
