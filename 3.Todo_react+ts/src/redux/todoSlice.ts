import type { PayloadAction } from "../../node_modules/@reduxjs/toolkit/dist/createAction";
import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id: string;
  title: string;
}

export interface TodoState {
  todo: Todo;
  todos: Todo[];
}

const initialState: TodoState = {
  todo: { id: "", title: "" },
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    reduxGetTodo: (state, action: PayloadAction<string>) => {
      const obj: Todo = {
        id: uuidv4(),
        title: action.payload,
      };

      state.todo = obj;
    },

    reduxGetTodos: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((elem) => elem.id != action.payload);
    },

    editTodo: (state, action: PayloadAction<Todo>) => {
      // console.log(action.payload);
      let arr = [...current(state.todos)];

      console.log(arr.find((elem) => elem.id == action.payload.id));
      arr = arr.map((elem) => {
        if (elem.id == action.payload.id) {
          return action.payload;
        } else {
          return elem;
        }
      });

      state.todos = arr;
    },
    
  },
});

export const { reduxGetTodo, reduxGetTodos, deleteTodo, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
