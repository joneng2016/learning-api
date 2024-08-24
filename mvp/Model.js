// Model.js
class TaskModel {
    constructor() {
      this.tasks = [];
    }
  
    getTasks() {
      return this.tasks;
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  }
  
  export default new TaskModel();
  