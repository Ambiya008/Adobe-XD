import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const BloodPressureChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => `${item.month} ${item.year}`),
    datasets: [
      {
        label: 'Systolic Blood Pressure',
        data: data.map(item => item.blood_pressure.systolic.value),
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
      },
      {
        label: 'Diastolic Blood Pressure',
        data: data.map(item => item.blood_pressure.diastolic.value),
        borderColor: 'rgb(54, 162, 235)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default BloodPressureChart;
