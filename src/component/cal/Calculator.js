import React, { useState } from "react";
import "./calculator.css";
const Calculator = () => {
  const [num1, setNumOne] = useState();
  const [num2, setNumTwo] = useState();
  const [result, setNumRsult] = useState();
  const [error, setError] = useState("");

  const changeNumOne = (e) => {
    const num = e.target.value;
    setNumOne(num);
    setNumRsult();
  };
  const changeNumTwo = (e) => {
    const num = e.target.value;
    setNumTwo(num);
    setNumRsult();
  };

  const onMulti = () => {
    if (num1 && num2) {
      setNumRsult(num1 * num2);
      setError();
    } else {
      setError("Error - enter two numbers");
    }
  };
  const onDivide = () => {
    if (num1 && num2) {
      setNumRsult(num1 / num2);
      setError();
    } else {
      setError("Error - enter two numbers");
    }
  };
  return (
    <div className="outer">
      <div className="inner">
        <h1> Calculator</h1>
        <div className="row">
          <label htmlFor="#num1">1st Number : </label>&nbsp;
          <input type="number" id="num1" value={num1} onChange={changeNumOne} />
        </div>
        <div className="row">
          <label htmlFor="#num2">2st Number : </label>&nbsp;
          <input type="number" id="num2" value={num2} onChange={changeNumTwo} />
        </div>
        <div className="btns">
          <button className="btn" onClick={onMulti}>
            Multiply
          </button>
          <button className="btn" onClick={onDivide}>
            Divide
          </button>
        </div>
        <div className="row">
          <div>The Result is : </div>&nbsp;
          {result}
        </div>
        {error && <div className="row">{error}</div>}
      </div>
    </div>
  );
};

export default Calculator;
