import { useState } from "react";
const TodoInput = ({ setTodos }) => {
  const [input, setInput] = useState();
  const addTodo = () => {
    if (!input) {
      return;
    }
    setTodos((pre) => {
      return [...pre, { content: input, isComplete: false }];
    });
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>ADD</button>
    </div>
  );
};

export default TodoInput;

