import React from 'react'

const Table = ({ salesData, monthlyProfit, totalDiscount }) => {
    return (
        <div className="table-wrapper">
            <table>
                <tbody>
                    <tr>
                        {["Months", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month) => (
                            <td>{month}</td>
                        ))}
                    </tr>
                    <tr>
                        <td className='td1'>Sales</td>
                        {salesData?.map((sales) => (       
                                <td>{Math.round(sales).toLocaleString()}</td>
                        ))}
                    </tr>
                    <tr>
                        <td className='td2'>Profit</td>
                        {monthlyProfit?.map((profit) => (
                                <td>{Math.round(profit).toLocaleString()}</td>        
                        ))}
                    </tr>
                    <tr>
                        <td className='td3'>Discount</td>
                        {totalDiscount?.map((discount) => (
                          <td>{Math.round(discount).toLocaleString()}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
