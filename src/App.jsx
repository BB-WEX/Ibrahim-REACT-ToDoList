import { useState } from "react";
import Greeting from "./Greeting";
import TaskPage from "./TaskPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>Welcome</h1>
      <div>
        {isLoggedIn ? (
          <TaskPage isLoggedIn={setIsLoggedIn} />
        ) : (
          <Greeting isLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </>
  );
}

export default App;
