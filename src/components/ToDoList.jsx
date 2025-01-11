import React, { useState } from 'react';
import TodoItem from './ToDoItem';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const AddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const DeleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };  

  return (
    <div className="todo-list">
      <div>
        <h2>Add Your Tasks</h2>
        <div className="add-task">
          <input
            type="text"
            placeholder="Enter task (max 50 characters)"
            value={taskInput}
            maxLength="50"
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button className="btn" onClick={AddTask}>Add</button>
        </div>
      </div>
      <div className="task-items">
        <h2>Pending Tasks</h2>
        {tasks.length === 0 ? (
          <h3>Nothing to do ✔️ </h3>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <TodoItem key={index} task={task} onDelete={() => DeleteTask(index)} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ToDoList;
