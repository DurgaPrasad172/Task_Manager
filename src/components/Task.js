import React from 'react';

const Task = ({ task, onToggle, onEdit, onDelete }) => (
  <div className="task flex justify-between items-center p-4 mb-2 bg-gray-100 rounded-lg">
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="mr-2"
      />
      <span
        className={`flex-1 cursor-pointer ${task.completed ? 'underline text-gray-500' : ''}`}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
    </div>
    <div className="flex">
      <button className="mx-1 p-1 bg-blue-500 text-white rounded" onClick={() => onEdit(task)}>Edit</button>
      <button className="mx-1 p-1 bg-red-500 text-white rounded" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  </div>
);

export default Task;
