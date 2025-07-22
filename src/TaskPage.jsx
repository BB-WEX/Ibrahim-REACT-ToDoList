import TaskList from "./TaskList"

const TaskPage = ({isLoggedIn}) => {

    const handleLogOut = () => {
        isLoggedIn(false);
    };

    return(
        <>
        <TaskList/>
        <button onClick={handleLogOut}>Log Out</button>
        </>
    );
};

export default TaskPage;