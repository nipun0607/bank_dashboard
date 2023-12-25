import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Data = (props) => {
  const chartRef = useRef(null);
  const { homevalue, loanTerm, interestRate, loanAmount } = props.data;
   
  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) * totalLoanMonths) /
    ((1 + interestPerMonth) * totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;
  
  const value=[ homevalue , totalInterestGenerated];
  useEffect(() => {

    const data = {
      labels: ['Red', 'Blue'],
      datasets: [
        {
          data: value,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1,
        },
      ],
    };

    
    const ctx = chartRef.current.getContext('2d');

    
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

 
    const newChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
       
        responsive: false, 
        maintainAspectRatio: false, 
        width: 400, 
        height: 400, 
      },
    });

    
    chartRef.current.chart = newChart;
  }, value);

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <canvas ref={chartRef} className='piechart'></canvas>
    </div>
  );
};

export default Data;



