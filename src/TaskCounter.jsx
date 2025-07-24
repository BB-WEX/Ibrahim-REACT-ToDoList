const TaskCounter = ({ count, setCount, tasks }) => {
  setCount(tasks.length);

  return (
    <p>
      <b>Total Tasks:</b> {count}
    </p>
  );
};

export default TaskCounter;
