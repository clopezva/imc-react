import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const [userHeight, setUserHeight] = useState('')
  const [userWeight, setUserWeight] = useState('')
  const [showResult, setShowResult] = useState(false)

  let bmi = (userWeight / (userHeight /100) ** 2).toFixed(2);

  function handleClick(){
    setShowResult(true)
  }

  return (
    <>
      <div class="container">
        <h2>BMI Calculator</h2>
        <form class="form">
          <input
            disabled={showResult}
            type="text"
            class="input"
            name="height"
            id="height"
            placeholder="Enter Height in cm..."
            onChange={e => setUserHeight(e.target.value)}
          />

          <input
            disabled={showResult}
            type="text"
            class="input"
            name="weight"
            id="weight"
            placeholder="Enter Weight in kg..."
            onChange={e => setUserWeight(e.target.value)}
          />

          <button disabled={showResult} type="submit" class="btn" onClick={handleClick}>
            Calculate
          </button>
          {showResult ? <div id="results"><p className="result">{bmi}</p></div> : null}
          <div className="guide"> 
            <h3>BMI Weight Guide</h3>
            <p>Under Weight: Less than 18.6</p>
            <p>Normal range: 18.6 and 24.9</p>
            <p>Overweight: Greater than 24.9</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
