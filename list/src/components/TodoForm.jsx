import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
        const[value, setValue] = useState("");
        const[category, setCategory] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            if(!value  || !category ) return;
            addTodo(value, category);
            setValue("");
            setCategory("");
            
        };

  return (
    <div className="todo-form">
        <h2>Adicionar Tarefa</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite a tarefa..." 
            value={value}    
            onChange={(e) => setValue(e.target.value)}/>

            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione a categoria</option>
                <option value="trabalho">Trabalho</option>
                <option value="estudos">Estudos</option>
                <option value="pessoal">Pessoal</option>
            </select>
            <button type="submit">Adicionar</button>
        </form>
    </div>
  );
};

export default TodoForm;