// TaskPresenter.js
import React, { useState, useEffect } from 'react';
import TaskModel from './TaskModel';
import TaskView from './TaskView';

const TaskPresenter = () => {
  const [tasks, setTasks] = useState(TaskModel.getTasks());

  useEffect(() => {
    // Possibly set up a subscription to updates
    // TaskModel.subscribe(updateTasks);
  }, []);

  const addTask = (taskName) => {
    TaskModel.addTask({ id: Date.now(), name: taskName });
    setTasks(TaskModel.getTasks());
  };

  const removeTask = (taskId) => {
    TaskModel.removeTask(taskId);
    setTasks(TaskModel.getTasks());
  };

  return (
    <TaskView
      tasks={tasks}
      onAddTask={addTask}
      onRemoveTask={removeTask}
    />
  );
};

export default TaskPresenter;
