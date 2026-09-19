import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([

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
  ]);

    const addTodo = (text, category) => {

      const newTodos = [...todos, {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
      setTodos( newTodos);
    };

    const removeTodo = (id) => {
      const newTodos =  [...todos]
      const filteredTodos = newTodos.filter((todo) => 
        todo.id !== id ? todo : null);
      setTodos(filteredTodos);
    }

    const completeTodo = (id) => {
      const newTodos = [...todos];
      newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
      setTodos(newTodos);
    }

  return (
    <div className="App">
      <h1>Lista de tarefas </h1>
      <div className="todo-list"> 
        {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))} 
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
