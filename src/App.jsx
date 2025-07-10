import { useStickyState } from "./hooks/useStickyState";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useStickyState("my-todo-list", []);

  const addTodo = (newTodo) => setTodos([...todos, newTodo]);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoChecked = (id, newData) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, ...newData } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="p-4 flex flex-col gap-4">
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={updateTodoChecked}
        />
      </div>
    </div>
  );
}
