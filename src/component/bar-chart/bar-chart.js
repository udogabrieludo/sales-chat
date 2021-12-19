import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
   
    Legend,
  } from 'chart.js'

const BarChart = ({salesData, monthlyProfit, totalDiscount}) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        ArcElement,
        BarElement,
        Title,
        Tooltip,
        Legend
      )

      const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
          const dataBar = {
            labels: labels,
            datasets: [{
              label: 'Sales',
            
              data: salesData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
            },
            {
              label: 'Discount Given',
            
              data: totalDiscount,
              backgroundColor: [
                'rgba(112, 139, 012, 0.2)',
                'rgba(025, 020, 124, 0.2)',
                'rgba(125, 201, 186, 0.2)',
                'rgba(115, 102, 112, 0.2)',
                'rgba(105, 112, 120, 0.2)',
                'rgba(207, 002, 155, 0.2)',
                'rgba(101, 103, 007, 0.2)'
              ],
              borderColor: [
                'rgba(112, 139, 012)',
                'rgba(025, 020, 124)',
                'rgba(125, 201, 186)',
                'rgba(115, 102, 112)',
                'rgba(105, 112, 120)',
                'rgba(207, 002, 155)',
                'rgba(101, 103, 007)'
              ],
              borderWidth: 1
            },
            {
              label: 'Profits',
            
              data: monthlyProfit,
              backgroundColor: [
                'rgba(215, 199, 132, 0.2)',
                'rgba(135, 120, 64, 0.2)',
                'rgba(215, 105, 86, 0.2)',
                'rgba(15, 162, 192, 0.2)',
                'rgba(155, 122, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(215, 199, 132)',
                'rgb(135, 120, 64)',
                'rgb(215, 105, 86)',
                'rgb(15, 162, 192)',
                'rgb(155, 122, 235)',
                'rgb(153, 102, 255)',
                'rgb(153, 102, 255)'
              ],
              borderWidth: 1
            },
            
            ]
          };
          

    return (
        <div>
             <Bar data={dataBar}/>
        </div>
    )
}

export default BarChart
