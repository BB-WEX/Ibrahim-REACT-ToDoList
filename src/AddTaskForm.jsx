import { useState } from "react";
import Input from "./Inputs";

const AddTask = ({ addOnTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleAddTask = () => {
    if (!taskTitle.trim() || !taskDesc.trim()) {
      alert("Invalid Entry");
      return;
    }
    const newTask = {
      taskTitle,
      taskDesc,
      completed: false,
    };
    addOnTask(newTask);
    setTaskTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      <Input
        text="Title"
        value={taskTitle}
        onChange={(event) => setTaskTitle(event.target.value)}
      />
      <Input
        text="Description"
        value={taskDesc}
        onChange={(event) => setTaskDesc(event.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
