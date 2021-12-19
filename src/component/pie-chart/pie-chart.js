import React from 'react'
import { Pie} from 'react-chartjs-2';
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

const PieChart = ({salesData}) => {

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

    const pieData = {
        labels:  ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: 'Dataset 1',
            data: salesData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(123, 152, 255, 0.2)',
                'rgba(103, 142, 255, 0.2)',
                'rgba(113, 132, 255, 0.2)',
                'rgba(53, 122, 205, 0.2)',
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
          }
        ]
      };


    return (
        <div>
             <Pie data={pieData}/>
        </div>
    )
}

export default PieChart
