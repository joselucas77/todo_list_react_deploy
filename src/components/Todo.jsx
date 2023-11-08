import React from 'react';
import '../styles/Todo.css';

import { FaCheck, FaWindowClose } from 'react-icons/fa';

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div 
    className="todo" 
    style={{textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
    <div className="content">
      <p>{todo.text}</p>
      <p className='category'>({todo.category})</p>
    </div>
    <div>
      <button ><FaCheck className='complete' onClick={() => completeTodo(todo.id)} /></button>
      <button className='remove' onClick={() => removeTodo(todo.id)}><FaWindowClose /></button>
    </div>
  </div>
  );
};

export default Todo;