import { RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../state/todo/todoSlice";

export default function TodoList() {
  const todos = useSelector((state: RootState) => {
    switch (state.todos.filter.status) {
      case "active":
        return state.todos.todos.filter((todo) => !todo.completed);
      case "completed":
        return state.todos.todos.filter((todo) => todo.completed);
      default:
        return state.todos.todos;
    }
  });

  const dispatch = useDispatch();

  console.log(todos);

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            <span>{todo.text}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
