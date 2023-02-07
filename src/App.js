import "./styles.css";
import React from "react";

const Item = ({ number, removeItem }) => (
  <div className="item">
    <p>{number + 1}</p>
    <div className="divider" />
    <button onClick={() => removeItem(number)}>Remove</button>
  </div>
);

const App = () => {
  const [count, setCount] = React.useState([]);

  const removeItem = (itemIdx) => {
    setCount(count.filter((_, idx) => idx != itemIdx));
  };

  return (
    <div className="App">
      <h1>Provide test</h1>
      <button onClick={() => setCount([...count, count.length + 1])}>
        Add item
      </button>
      {count.map((_, idx) => (
        <Item key={idx} number={idx} removeItem={removeItem} />
      ))}
    </div>
  );
};

export default App;
