import { useState } from "react";
import Greeting from "./Greeting";
import TaskPage from "./TaskPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="main">
      <h1>{isLoggedIn ? ("To-Do List") : ("Welcome")}</h1>
      <div>
        {isLoggedIn ? (
          <TaskPage isLoggedIn={setIsLoggedIn} />
        ) : (
          <Greeting isLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </div>
  );
}

export default App;
