import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import EditTaskModal from './components/EditTaskModal';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const closeModal = () => {
    setEditingTask(null);
  };

  return (
    <div className="app container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onEdit={editTask}
        onDelete={deleteTask}
      />
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          updateTask={updateTask}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
