const TodoItem = ({ todo }) => {
  const { content, isComplete } = todo;

  return <li>{content}</li>;
};
export default TodoItem;
