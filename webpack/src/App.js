import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

const useNotes = (url) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setNotes(response.data);
    });
  }, [url]);
  return notes;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState([]);
  const notes = useNotes(BACKEND_URL);

  const handleClick = () => {
    setCounter(counter + 1);
    setValues(values.concat(counter));
  };

  return (
    <div className="container">
      Hello webpack <span className="bold">{counter}</span> clicks
      <button className="button" onClick={handleClick}>
        Press
      </button>
      <div>
        {notes.length} notes on server <strong>{BACKEND_URL}</strong>
      </div>
    </div>
  );
};

export default App;
