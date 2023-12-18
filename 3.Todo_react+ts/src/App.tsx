import { useState } from 'react';
import AddToDo from './components/AddToDo';
import Todos from './components/Todos';
import "./App.css"

export interface Todo {
  id: string;
  tittle: string;
}

function App() {
  const [todo, setTodo] = useState<Todo>({ id: "", tittle: "" });
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
    <div>
       <h1>ToDo App</h1>
      <AddToDo
        todo={todo}
        setTodo={setTodo}
        setTodos={setTodos}
        todos={todos}
      />
      <Todos todos={todos} />
      </div>
    </>
  )
}

export default App
