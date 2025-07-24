import { useState } from "react";
import Input from "./Inputs";

const Greeting = ({ isLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username.trim || !password.trim) {
      alert("Enter a suitable username and password");
    } else {
      isLoggedIn(true);
    }
  };

  return (
    <div className="greeting">
      <p>Please log in</p>
      <div className="login-form">
        <p>Username</p>
        <Input
          text="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <p>Password</p>
        <Input
          text="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Greeting;
