export default function TodoForm({ onAdd }) {
  const onSubmit = async (formData) => {
    const todo = formData.get("todo");
    onAdd({
      id: Date.now(),
      text: todo,
    });
  };

  return (
    <form action={onSubmit} className="flex items-center gap-2">
      <input name="todo" className="bg-zinc-600 border-2 border-blue-800 rounded-md px-4 py-3 flex-1" />
      <button type="submit" className="border-2 border-zinc-500 rounded-md px-4 py-3 bg-blue-800">Add</button>
    </form>
  );
}
