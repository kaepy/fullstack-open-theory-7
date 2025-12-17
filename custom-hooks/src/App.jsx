import { useState } from "react";

// Custom hook for counter functionality
const useCounter = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  const zero = () => {
    setValue(0);
  };

  // Return the current value and the functions to modify it
  return {
    value,
    increase,
    decrease,
    zero,
  };
};

// Custom hook for managing form field state
const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange,
  };
};

const App = () => {
  // Huono tapa ilman custom hookia
  const [counterBad, setCounterBad] = useState(0);

  // Hyvä tapa eriyttää logiikka custom hookiksi
  const counter = useCounter(); // Using the custom hook

  // Using the custom hook multiple times
  const left = useCounter();
  const right = useCounter();

  // Huono tapa, joka vaatii paljon toistoa
  const [nameBad, setName] = useState("");
  const [bornBad, setBorn] = useState("");
  const [heightBad, setHeight] = useState("");

  // Parempi tapa käyttää useField hookkia
  const name = useField("text");
  const born = useField("date");
  const height = useField("number");

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h3>Huonompi tapa ilman custom hookia</h3>
        <div>{counterBad}</div>
        <button onClick={() => setCounterBad(counterBad + 1)}>plus</button>
        <button onClick={() => setCounterBad(counterBad - 1)}>minus</button>
        <button onClick={() => setCounterBad(0)}>zero</button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Logiikan eriyttäminen custom hookiksi</h3>
        <div>{counter.value}</div>
        <button onClick={counter.increase}>plus</button>
        <button onClick={counter.decrease}>minus</button>
        <button onClick={counter.zero}>zero</button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Saman hookin uusiokäyttöä</h3>
        Left: {left.value}
        <button onClick={left.increase}>left</button>
        <button onClick={right.increase}>right</button>
        Right: {right.value}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Lomakkeen käsittely Reactissa vaivanloista</h3>
        <form>
          name:{" "}
          <input
            type="text"
            value={nameBad}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          birthdate:{" "}
          <input
            type="date"
            value={bornBad}
            onChange={(event) => setBorn(event.target.value)}
          />
          <br />
          height:{" "}
          <input
            type="number"
            value={heightBad}
            onChange={(event) => setHeight(event.target.value)}
          />
        </form>
        <div>
          {nameBad} {bornBad} {heightBad}
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Parempi tapa käsittellä lomakkeita</h3>
        <form>
          name:{" "}
          <input type={name.type} value={name.value} onChange={name.onChange} />
          <br />
          birthdate:{" "}
          <input type={born.type} value={born.value} onChange={born.onChange} />
          <br />
          height:
          <input
            type={height.type}
            value={height.value}
            onChange={height.onChange}
          />
        </form>
        <div>
          {name.value} {born.value} {height.value}
        </div>
      </div>
    </div>
  );
};

export default App;
