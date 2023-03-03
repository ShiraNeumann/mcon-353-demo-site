import { cloneDeep } from "lodash";

export const TodoActions = {
  ADD: "ADD",
  DELETE: "DELETE",
  TOGGLE_CHECKED: "TOGGLE_CHECKED",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case TodoActions.ADD: {
      return { todos: [action.todo, ...state.todos] };
    }
    case TodoActions.DELETE: {
      let newTodos = cloneDeep(state.todos);
      const deleteTodo = newTodos.find((x) => x.id === action.todo.id);
      newTodos.splice(newTodos.indexOf(deleteTodo), 1);
      return { todos: newTodos };
    }
    case TodoActions.TOGGLE_CHECKED: {
      let newTodos = cloneDeep(state.todos);
      const updatedTodo = newTodos.find((x) => x.id === action.todo.id);
      updatedTodo.isComplete = !updatedTodo.isComplete;
      if (updatedTodo.isComplete) {
        newTodos.push(newTodos.splice(newTodos.indexOf(updatedTodo), 1)[0]); //move to the bottom of the list if it is complete
      } else {
        newTodos.splice(newTodos.indexOf(updatedTodo), 1);
        newTodos.splice(0, 0, updatedTodo);
      }
      return {
        todos: newTodos,
      };
    }
    default:
      return { state };
  }
};
