import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Filters from "./components/Filters";

function App() {
  return (
    <>
      <AddTodo />
      <TodoList />
      <Filters />
    </>
  );
}

export default App;
