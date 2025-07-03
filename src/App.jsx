import { useState, useEffect } from "react";

const getDefaultLocalStorageValue = (key) => {
  const storedValue = localStorage.getItem(key);
  if (!storedValue) {
    return null;
  }
  try {
    return JSON.parse(storedValue);
  } catch {
    return null;
  }
};

const useStickyState = (localStorageKey, defaultValue) => {
  const [state, setState] = useState(
    getDefaultLocalStorageValue(localStorageKey) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [localStorageKey, state]);
  return [state, setState];
};

export default function App() {
  const [todos, setTodos] = useStickyState("my-todo-list", []);

  const onFormAction = async (formData) => {
    const todo = formData.get("todo");

    setTodos([...todos, {
      id: Date.now(),
      text: todo,
    }]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const updateTodoChecked = (id, newTodo) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          ...newTodo,
        };
      }
      return todo;
    }))
  }

  return (
    <>
      <div className="min-h-screen bg-zinc-900 text-white">
        <div className="p-4 flex flex-col gap-4">
        <form action={onFormAction} className="flex items-center gap-2">
          <input name="todo" className="bg-zinc-600 border-2 border-blue-800 rounded-md px-4 py-3 flex-1" />
          <button type="submit" className="border-2 border-zinc-500 rounded-md px-4 py-3 bg-blue-800">Add</button>
        </form>
        <ul className="flex flex-col gap-4">
          {todos.map((todo) => (
            <li key={todo.id} className="bg-zinc-700 gap-4 rounded-md px-4 py-2 flex items-center">
              <input
                type="checkbox"
                onChange={() => {
                  updateTodoChecked(todo.id, {
                    checked: !todo.checked,
                  });
                }}
              />
              <span className="w-full">{todo.text}</span>
              <button onClick={() => deleteTodo(todo.id)}>❌</button>
            </li>
          ))}
        </ul>
        </div>
      </div>
      
    </>
  );
}
