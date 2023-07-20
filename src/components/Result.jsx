import { Stack, Typography } from '@mui/material';
import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const Result = ({ data, unit }) => {

  const { homeValue, downPayment, loanTerm, loanAmount, interestRate } = data
  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = interestRate / 100 / 12;

  const monthlyPayment = (loanAmount * interestPerMonth *
    (1 + interestPerMonth) ** totalLoanMonths) / ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  const pieChartData = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        label: 'Ratio of Pricipal and Interest',
        data: [homeValue, totalInterestGenerated],
        backgroundColor: [

          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',

        ],
        borderColor: [

          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };



  return (
    <Stack gap={3}>
      <Typography variant='h5' textAlign='center'>Monthly Payment; {unit} {monthlyPayment.toFixed(2)} </Typography>
      <Stack direction='row' justifyContent='center'>
        <div>
          <Pie data={pieChartData} />
        </div>

      </Stack>

    </Stack>
  )
}

export default Result;
