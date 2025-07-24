import { useState } from "react";
import TaskCounter from "./TaskCounter";
import AddTask from "./AddTaskForm";
import TaskList from "./TaskList";

const TaskPage = ({ isLoggedIn }) => {
  const [taskCount, setTaskCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const onToggle = (index) => {
    const updatedTasks = [...tasks];
    // Allows for checking and unchecking
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleLogOut = () => {
    isLoggedIn(false);
  };

  return (
    <div>
      <TaskCounter tasks={tasks} setCount={setTaskCount} count={taskCount} />
      <h1>Add Task</h1>
      <AddTask addOnTask={addTask} />
      <h1>Your Task List</h1>
      <TaskList onToggle={onToggle} tasks={tasks} setTasks={setTasks} />
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default TaskPage;
