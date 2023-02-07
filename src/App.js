import "./styles.css";

const Item = ({ number }) => (
  <div className="item">
    <p>{number}</p>
    <div className="divider" />
    <button>Remove</button>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <h1>Provide test</h1>
      <button>Add item</button>
    </div>
  );
};

export default App;
