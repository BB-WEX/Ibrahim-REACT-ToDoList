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

  const handleLogOut = () => {
    isLoggedIn(false);
  };

  return (
    <div>
      <TaskCounter count={taskCount} />
      <h1>Add Task</h1>
      <AddTask addOnTask={addTask} />
      <h1>Your Task List</h1>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default TaskPage;
