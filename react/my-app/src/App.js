import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  // array to store to-do list, [content, isCompleted]
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <TodoHeader />
      <TodoInput setTodos={setTodos} />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
