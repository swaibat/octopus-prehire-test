import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function Chart(datatest: any) {
  const labels = [
    '0',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const data = {
    labels,
    datasets: [
      {
        label: 'Rate',
        data: datatest.data.map((number: any) => number),
        borderColor: '#35d8ac',
        backdropColor: '#35d8ac',
        backgroundColor: '#35d8ac'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart'
      }
    }
  };

  return <Line options={options} data={data} />;
}
