import {useState} from 'react';
import '../styles/TodoForm.css';

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className='todo-form'>
      <h2>Criar Tarefa:</h2>  
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite o título' 
        onChange={e => setValue(e.target.value)} 
        value={value} />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudo">Estudo</option>
          <option value="Pessoal">Pessoal</option>
        </select>
        <button type='submit'>Salvar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;