import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ todo }, index) => {
        return <TodoItem key={`${todo.content}`} todo={todo} />;
      })}
    </ul>
  );
};
export default TodoList;
