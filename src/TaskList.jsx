const TaskList = ({ tasks, setTasks, onToggle }) => {
  const handleDeleteTask = (indexDelete) => {
    // Filter out the deleted task
    setTasks(tasks.filter((_, index) => index !== indexDelete));
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
          style={{ textDecoration: task.completed ? "line-through 3px" : "none" }}
        >
          <strong>
            Task {index + 1}: {task.taskTitle} - {task.taskDesc}
          </strong>
        </span>
      </div>
      <button className="delete-btn" onClick={() => handleDeleteTask(index)}>
        Delete
      </button>
    </li>
  ));

  return <ul>{list}</ul>;
};

export default TaskList;
