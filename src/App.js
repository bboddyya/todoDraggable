import { useState, useEffect } from "react";

import AddToDo from "./AddToDo/AddToDo";
import ToDoList from "../../todofixed/src/ToDoList/ToDoList";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="bord">
          <AddToDo todo={todo} setTodo={setTodo} />
          <ToDoList todo={todo} setTodo={setTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
