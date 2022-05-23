import React, { useEffect } from "react";
import Draggable from "react-draggable";

function ToDoList({ todo, setTodo }) {
  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  function updatePosition(data, item) {
    const newArr = todo.map((e) => {
      if (e.id === item.id) {
        return { ...e, deafaultPosition: { x: data.x, y: data.y } };
      }
      return e;
    });
    setTodo(newArr);
  }

  //   useEffect(() => {
  //     localStorage.setItem("todo", JSON.stringify(todo));
  //   }, [...todo.deafaultPosition]);

  return (
    <div className="inner">
      {todo.map((item) => {
        return (
          <Draggable
            key={item.id}
            defaultPosition={item.deafaultPosition}
            onStop={(_, data) => updatePosition(data, item)}
          >
            <div
              className="todo-item"
              key={item.id}
              style={{ backgroundColor: `${item.colore}` }}
            >
              {item.title}
              <button className="delete" onClick={() => deleteTodo(item.id)}>
                x
              </button>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
}
export default ToDoList;
