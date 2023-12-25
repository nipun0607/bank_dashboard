import React from 'react';

const FinancialData = ({ data, onDataUpdate }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onDataUpdate((prevData) => ({ ...prevData, [name]: parseFloat(value) || 0 }));
  };

  return (
    <div>
      <h2>Loan Details</h2>
      <label>
        Home Value:
        <input type="range" max="10000" min="1000" name="homevalue" value={data.homevalue} onChange={handleInputChange} />
        
      </label>
      <label>
        Loan Amount:
        <input type="range" max="10000" min="0" name="loanAmount" value={data.loanAmount} onChange={handleInputChange} />
      </label>
      <label>
        Loan Term (years):
        <input type="range" max="25" min="5" name="loanTerm" value={data.loanTerm} onChange={handleInputChange} />
      </label>
      <label>
        Interest Rate (%):
        <input type="range" max="18" min="2" name="interestRate" value={data.interestRate} onChange={handleInputChange} />
      </label>
    </div>
  );
};

export default FinancialData;
