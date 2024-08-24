// TaskView.js
import React from 'react';

const TaskView = ({ tasks, onAddTask, onRemoveTask }) => {
  const [newTask, setNewTask] = React.useState('');

  const handleAddClick = () => {
    if (newTask) {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => onRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button onClick={handleAddClick}>Add Task</button>
    </div>
  );
};

export default TaskView;
