import React from 'react'
import { Line } from 'react-chartjs-2';

const LineChart = ({salesData, monthlyProfit, totalDiscount}) => {

 
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const data = { 
        labels: labels,
        datasets: [
            {
            label: 'Sales',
            data: salesData,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
        {
            label: 'Profits',
            data: monthlyProfit,
            fill: false,
            borderColor: 'green',
            tension: 0.1
        },
        {
            label: 'Discount Given',
            data: totalDiscount,
            fill: false,
            borderColor: 'red',
            tension: 0.1
        },
       
    ]
        };

    return (
        <div>
            <Line data={data}/> 
        </div>
    )
}

export default LineChart
