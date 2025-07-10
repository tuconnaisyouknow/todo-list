import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete, onToggle }) {
  return (
    <ul className="flex flex-col gap-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
