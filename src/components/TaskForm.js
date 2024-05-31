import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New Task"
        className="p-2 border border-gray-300 rounded flex-1"
      />
      <button type="submit" className="ml-2 p-2 bg-green-500 text-white rounded">Add Task</button>
    </form>
  );
};

export default TaskForm;
