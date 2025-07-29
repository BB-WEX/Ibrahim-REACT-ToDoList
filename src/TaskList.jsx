import { useState } from "react";
import Input from "./Inputs";

const TaskList = ({ tasks, setTasks, onToggle }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [isEditing, setIsEditing] = useState("false");

  const handleDeleteTask = (indexDelete) => {
    // Filter out the deleted task
    setTasks(tasks.filter((_, index) => index !== indexDelete));
  };

  const enableEdit = (chosenIndex) => {
    if (isEditing == true) {
      return;
    }
    setNewTitle("");
    setNewDesc("");
    const editedTasks = [...tasks];
    editedTasks[chosenIndex].editMode = true;
    setTasks(editedTasks);
    setIsEditing(true);
  };

  const onEdit = (changeIndex, newTaskTitle, newTaskDesc) => {
    const editedTasks = [...tasks];
    if (newTaskTitle.trim() && newTaskDesc.trim()) {
      editedTasks[changeIndex].taskTitle = newTaskTitle;
      editedTasks[changeIndex].taskDesc = newTaskDesc;
    }
    editedTasks[changeIndex].editMode = false;
    setTasks(editedTasks);
    setIsEditing(false);
  };

  const list = tasks.map((task, index) => (
    <li key={index}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(index)}
        />
        <span
          style={{
            textDecoration: task.completed ? "line-through 3px black" : "none",
          }}
        >
          <span>
            <strong>Task {index + 1}:</strong>
            <div className="task-layout">
              <p>
                <span>
                  {task.editMode ? (
                    <Input
                      value={index.taskTitle}
                      text={task.taskTitle}
                      max={"23"}
                      onChange={(event) => setNewTitle(event.target.value)}
                    />
                  ) : (
                    task.taskTitle
                  )}
                </span>
                <br />
                <span>
                  {task.editMode ? (
                    <Input
                      value={index.taskDesc}
                      text={task.taskDesc}
                      max={"50"}
                      onChange={(event) => setNewDesc(event.target.value)}
                    />
                  ) : (
                    task.taskDesc
                  )}
                </span>
              </p>
            </div>
          </span>
        </span>
      </div>
      <div className="list-btns">
        <button className="delete-btn" onClick={() => handleDeleteTask(index)}>
          Delete
        </button>
        {task.editMode ? (
          <button
            className="edit-btn"
            onClick={() => {
              onEdit(index, newTitle, newDesc);
            }}
          >
            Submit
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={() => {
              enableEdit(index);
            }}
          >
            Edit
          </button>
        )}
      </div>
    </li>
  ));

  return <ul>{list}</ul>;
};

export default TaskList;
