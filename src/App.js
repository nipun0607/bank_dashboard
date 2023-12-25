import React, { useState } from 'react';
import './App.css';
import FinancialData from './Component/FinancialData';
import Data from './Component/Data';

function App() {
  const [financialData, setFinancialData] = useState({
    homevalue:5000,
    loanAmount: 10000,
    loanTerm: 10,
    interestRate: 5,
  });

  return (
    <div className="App">
      <h1>Bank Dashboard</h1>
      <FinancialData data={financialData} onDataUpdate={setFinancialData} />
      <Data data={financialData} />
    </div>
  );
}

export default App;
