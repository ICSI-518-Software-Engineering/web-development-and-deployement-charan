import React, { useState } from 'react';
import axios from 'axios';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [frontendResult, setFrontendResult] = useState('0');
  const [backendResult, setBackendResult] = useState('');

  const handleAddition = async () => {
    try {
      // Calculate frontend result
      const frontendResult = parseFloat(num1) + parseFloat(num2);
      setFrontendResult(frontendResult);

      // Calculate backend result
      const response = await axios.post('http://localhost:5000/add', { num1: parseFloat(num1), num2: parseFloat(num2) });
      setBackendResult(response.data.result);

      // Clear fields
      setNum1('');
      setNum2('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card text-center border-green shadow-sm">
        <div className="card-header bg-success text-white">
          <h2>Addition Calculator</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="firstNumber" className="form-label">Enter First Number:</label>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    id="firstNumber"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3 mb-3">
                <div className="col">
                  <label htmlFor="secondNumber" className="form-label">Enter Second Number:</label>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    id="secondNumber"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <button className="btn btn-success w-100" onClick={handleAddition}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <h4 className="text-success">Your Addition Result (from server) is: {backendResult && <span> {backendResult}</span>}</h4>
            </div>
            <div className="col-md-6">
              <h4 className="text-success">Your Addition Result (from ReactJS) is: {frontendResult && <span> {frontendResult}</span>}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
