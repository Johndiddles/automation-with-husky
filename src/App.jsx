import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Git Automation with Husky</h1>
      <p>Let's get to work...</p>
    </div>
  );
}

export default App;
