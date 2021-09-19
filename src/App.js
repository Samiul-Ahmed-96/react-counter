import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(34);
  const handleIncrese = () => setCount(count + 1);
  const handleDecrese = () => setCount(count - 1);
  
  return(
    <div>
      <h2>Counter : {count} </h2>
      <button onClick={handleIncrese}>Increse</button>
      <button onClick={handleDecrese}>Decrese</button>
    </div>
  )
}
export default App;
