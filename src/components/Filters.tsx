import { useDispatch } from "react-redux";
import { setFilter } from "../state/todo/todoSlice";

export default function Filters() {
  const dispatch = useDispatch();

  const handleFilter = (status: "all" | "completed" | "active") => {
    dispatch(setFilter({ status }));
  };

  return (
    <div>
      <button onClick={() => handleFilter("all")}>All</button>
      <button onClick={() => handleFilter("completed")}>Completed</button>
      <button onClick={() => handleFilter("active")}>Active</button>
    </div>
  );
}
