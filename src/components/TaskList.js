import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onToggle, onEdit, onDelete }) => (
  <div className="task-list mt-4 space-y-2">
    {tasks.map(task => (
      <Task
        key={task.id}
        task={task}
        onToggle={onToggle}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default TaskList;
