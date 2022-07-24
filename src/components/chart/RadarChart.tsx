import React, { FunctionComponent } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { chart } from '../../redux/slice/reportSlice';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart: FunctionComponent<{
  radar: chart
}> = ({ radar }) => {

  const { labels, data } = radar;
  const pushdata = {
    labels: labels,
    datasets: [
      {
        label: 'cantidad de ventas',
        data: data,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Cantidad de ventas por categoría',
      },
    },
  };
  

  return (
    <Radar data={pushdata} options={options}/>
  )
}

export default RadarChart