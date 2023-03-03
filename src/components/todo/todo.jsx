import React, { useState, useReducer, useContext } from "react";
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
import { TodoActions } from "../../state/todo/todo-reducer.jsx";
import { todocontext } from "../../state/todo/todo-context";

export const Todo = () => {
  const [input, setInput] = useState(""); //use hook for keeping track of state
  const { todoState, todoDispatch } = useContext(todocontext); //pulling the todos from the react element, so that it will remember what is there if you switch pages

  const onInput = (event) => {
    setInput(event.target.value);
  };

  const addToDo = () => {
    if (input === "") {
      return;
    }
    todoDispatch({
      type: TodoActions.ADD,
      todo: {
        title: input,
        isComplete: false,
        id: todoState.todos.length + 1,
      },
    });
    setInput("");
  };

  const toggleChecked = (todo) => {
    todoDispatch({
      type: TodoActions.TOGGLE_CHECKED,
      todo,
    });
  };

  const deleteTodo = (todo) => {
    todoDispatch({
      type: TodoActions.DELETE,
      todo,
    });
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
              todoState.todos.map(
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
                        <DeleteOutlinedIcon onClick={() => deleteTodo(todo)} />
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
