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

const StackBarChart = () => {
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

      const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul"];
      const arbitraryStackKey = "stack1";
          const dataBar = {
            labels: labels,
            datasets: [{
              label: 'My First Dataset',
              stack: arbitraryStackKey,
              data: [65, 59, 80, 81, 56, 55, 40],
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
                label: 'My Second Dataset',
                stack: arbitraryStackKey,
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                  'rgb(80, 3, 20)',
                  'rgb(139, 73, 6)',
                  'rgb(255, 179, 0)',
                  'rgb(19, 177, 177)',
                  'rgb(20, 161, 255)',
                  'rgb(104, 28, 255)',
                  'rgb(14, 94, 255)'
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
             <Bar data={dataBar}/>
        </div>
    )
}

export default StackBarChart
