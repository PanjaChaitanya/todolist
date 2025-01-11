import React from 'react';

const ToDoItem = ({ task, onDelete }) => {
  return (
    <>
    
      <li className="todo-item">
        <span>{task}</span>
        <button onClick={onDelete} className="delete-btn"></button>
      </li>
    
    </>
  );
};

export default ToDoItem;
