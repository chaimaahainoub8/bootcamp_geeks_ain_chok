import React, { useState } from 'react';

const DailyChallenge = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      alert("Please enter valid numbers");
      return;
    }

    let res;
    switch (operation) {
      case 'add': res = n1 + n2; break;
      case 'subtract': res = n1 - n2; break;
      case 'multiply': res = n1 * n2; break;
      case 'divide': res = n1 / n2; break;
      default: res = 0;
    }
    setResult(res);
  };

  return (
    <div className="container mt-5">
      <div className="card text-white bg-dark p-4" style={{maxWidth: '500px'}}>
        <h2 className="text-center mb-4">Calculator</h2>
        
        <div className="d-flex gap-2 mb-3">
          <input 
            type="number" 
            className="form-control" 
            value={num1} 
            onChange={(e) => setNum1(e.target.value)} 
            placeholder="Num 1"
          />
          
          {/* BONUS: Select Operation */}
          <select 
            className="form-select" 
            style={{width: '80px'}}
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">x</option>
            <option value="divide">/</option>
          </select>

          <input 
            type="number" 
            className="form-control" 
            value={num2} 
            onChange={(e) => setNum2(e.target.value)} 
            placeholder="Num 2"
          />
        </div>

        <button onClick={calculate} className="btn btn-primary w-100 mb-4">Calculate</button>

        {result !== null && (
          <h1 className="text-center text-warning">{result}</h1>
        )}
      </div>
    </div>
  );
};

export default DailyChallenge;