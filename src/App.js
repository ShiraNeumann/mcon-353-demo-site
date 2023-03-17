import "./App.css";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";
import { HashRouter, Routes, Route } from "react-router-dom";
import { todocontext } from "./state/todo/todo-context";
import { todoReducer } from "./state/todo/todo-reducer";
import { useReducer } from "react";
import { Chat } from "./components/chat/chat";
function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] }); //the dispatcher takes the todoState and updates it

  return (
    <HashRouter>
      <Header />
      <todocontext.Provider value={{ todoState, todoDispatch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </todocontext.Provider>
    </HashRouter>
  );
}

export default App;
