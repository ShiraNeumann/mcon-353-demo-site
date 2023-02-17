import "./App.css";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
