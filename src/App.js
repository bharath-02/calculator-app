import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    if (value === "=") {
      // Evaluate the expression and handle errors
      try {
        // Use eval() to calculate the result
        const evaluatedResult = eval(input);
        setResult(evaluatedResult);
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      // Clear the input and result
      setInput("");
      setResult("");
    } else {
      // Append the clicked button value to the input
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div>{result}</div>
      <div className="calculator-grid">
        {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "C", "0", "=", "/"].map((item, index) => (
          <button key={index} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
