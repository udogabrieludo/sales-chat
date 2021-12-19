import React from 'react'
import BarChart from '../component/bar-chart/bar-chart';
import PieChart from '../component/pie-chart/pie-chart';
import LineChart from '../component/line-chart/line-chart';
import StackBarChart from '../component/stack-bar/stack-bar';
import { years } from '../fixtures';
import Table from '../component/table/table';

 
const ChartComponent = ({ salesData, monthlyProfit,totalDiscount, handleChange, filterDate }) => {

  return (  

    <div className="chart-container">
      <h3>Filter by  Year</h3>
      <select onChange={handleChange} value={filterDate}>
        {years.map(({ value, title }) => (
          <option key={value} value={value}>{title}</option>
        ))}
      </select>

      <div className='column'>
        <div className='inner-column'>
          <LineChart salesData={salesData} monthlyProfit={monthlyProfit} totalDiscount={totalDiscount}/>
        </div>

        <div className='inner-column'>
          <PieChart salesData={salesData} />
        </div>
      </div>
     
      <div  className='column'>
      <div  className='inner-column'>
        <BarChart salesData={salesData} monthlyProfit={monthlyProfit} totalDiscount={totalDiscount}/>
      </div>
      <div  className='inner-column'>
        <h3>{filterDate} Sales Report</h3>
           <Table salesData={salesData} monthlyProfit={monthlyProfit} totalDiscount={totalDiscount}/>
        </div>
      </div>
      
    </div>
  )
}

export default ChartComponent
