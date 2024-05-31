import React, { useState } from 'react';

const EditTaskModal = ({ task, updateTask, closeModal }) => {
  const [text, setText] = useState(task.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(task.id, text);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-lg w-full max-w-sm mx-auto">
        <div className="flex space-x-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-2 border border-gray-300 rounded flex-1"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">Update Task</button>
          <button type="button" onClick={closeModal} className="p-2 bg-gray-500 text-white rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskModal;
