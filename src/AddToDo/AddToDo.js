import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";

function AddToDo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function enter() {
    if (value === "") {
      return null;
    }
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        title: value,
        colore: randomColor({
          luminosity: "light",
        }),
        deafaultPosition: {
          x: -100,
          y: -100,
        },
        isReady: true,
      },
    ]);
    setValue("");
  }

  const keyAdd = (e) => {
    if (e.key === "Enter") {
      enter();
    }
  };
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter something"
        onKeyPress={keyAdd}
      />
      <button className="enter" onClick={enter}>
        ENTER
      </button>
    </div>
  );
}

export default AddToDo;
