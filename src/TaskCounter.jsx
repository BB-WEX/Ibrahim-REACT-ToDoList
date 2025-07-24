import { useEffect } from "react";

const TaskCounter = ({ count, setCount, tasks }) => {
  useEffect(() => {
    setCount(tasks.length);
  }, [tasks, setCount]);

  return (
    <p>
      <b>Total Tasks:</b> {count}
    </p>
  );
};

export default TaskCounter;
