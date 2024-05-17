import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  id: number;
  text: string;
  completed: boolean;
};

type TTodos = TTodo[];

type TFilter = {
  status: "all" | "completed" | "active";
};

const initialState: { todos: TTodos; filter: TFilter } = {
  filter: { status: "all" },
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setFilter: (state, action: PayloadAction<TFilter>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, setFilter } = todoSlice.actions;

export default todoSlice.reducer;
