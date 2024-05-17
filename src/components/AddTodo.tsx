import { useState } from "react";
import { addTodo } from "../state/todo/todoSlice";
import { useDispatch } from "react-redux";
export default function AddTodo() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(
        addTodo({
          id: Math.random(),
          text,
          completed: false,
        })
      );
      setText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={(e) => {
          console.log(e.key);
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
