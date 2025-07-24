const TaskList = ({ tasks, setTasks }) => {
  const handleDeleteTask = (indexDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexDelete));
  };

  const list = tasks.map((task, index) => (
    <li key={index}>
      <div>
        <strong>Task {index + 1}</strong>: {task.taskTitle} - {task.taskDesc}
      </div>
      <button className="delete-btn" onClick={() => handleDeleteTask(index)}>
        Delete
      </button>
    </li>
  ));

  return <ul>{list}</ul>;
};

export default TaskList;
