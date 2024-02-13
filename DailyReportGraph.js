import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DailyReportGraph = ({ records }) => {
  const data = {
    labels: Object.keys(records),
    datasets: [
      {
        label: 'Fetched',
        data: Object.values(records).map(record => record.fetched),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Applied',
        data: Object.values(records).map(record => record.applied),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Daily Report',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default DailyReportGraph;
