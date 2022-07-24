import React, { FunctionComponent } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { chart } from '../../redux/slice/reportSlice';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Ventas por días',
        },
    },
};





const AreaChart: FunctionComponent<{
    area: chart
}> = ({ area: {
    labels,
    data,
} }) => {
        const pushdata = {
            labels,
            datasets: [
                {
                    fill: true,
                    label: 'Ventas',
                    data: data,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
        };
        return (

            <Line options={options} data={pushdata} />
        )
    }

export default AreaChart