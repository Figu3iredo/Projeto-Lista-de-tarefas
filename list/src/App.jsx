import { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

const STORAGE_KEY = "todos";

const defaultTodos = [
  { id: 1,
    text: "criar funcionalidade x no sistema",
    category: "trabalho",
    isCompleted: false,
  },
  { id: 2,
    text: "estudar react",
    category: "estudos",
    isCompleted: false,
  },
  { id: 3,
    text: "ir ao mercado",
    category: "pessoal",
    isCompleted: false,
  },
];

function loadTodos() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultTodos;
  } catch {
    return defaultTodos;
  }
}

function App() {
  const [todos, setTodos] = useState(loadTodos);

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("A-Z");

    useEffect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text, category) => {
      const newTodo = {
        id: crypto.randomUUID(),
        text,
        category,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    }

    const completeTodo = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );
    }

  return (
    <div className="App">
      <h1>Lista de tarefas </h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list"> 

        {todos
        .filter((todo) => filter === "all"
         ? true : filter === "completed" 
         ? todo.isCompleted : !todo.isCompleted
        )
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a,b) => sort === "A-Z" 
        ? a.text.localeCompare(b.text) 
        : b.text.localeCompare(a.text)
        )
        .map((todo) => (
        <Todo key={todo.id} todo={todo} 
        removeTodo={removeTodo} completeTodo={completeTodo} />
        ))} 
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;