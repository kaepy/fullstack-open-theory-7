import { useState } from "react";
import "./index.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      Hello webpack {counter} clicks
      <button className="button" onClick={() => setCounter(counter + 1)}>
        press
      </button>
    </div>
  );
};

export default App;
