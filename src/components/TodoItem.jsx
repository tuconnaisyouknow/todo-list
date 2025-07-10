export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className="bg-zinc-700 gap-4 rounded-md px-4 py-2 flex items-center">
      <input
        type="checkbox"
        checked={todo.checked ?? false}
        onChange={() => onToggle(todo.id, { checked: !todo.checked })}
      />
      <span className="w-full">{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>❌</button>
    </li>
  );
}
