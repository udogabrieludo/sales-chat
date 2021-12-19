import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { SalesContext } from '../context/provider';
import Loader from '../component/loader/loader';
import ChartComponent from './chart';

 
const HomeComponent = () => { 

    const [filterDate, setFilterDate] = useState('2014');
    const [loadingState, setLoadingState] = useState("Please Wait...")
    const { state: { sales, loading }, dispatch } = useContext(SalesContext)


    const filterYear = (arr, years) => {
        const activitiesByYear = arr?.filter((date) => [...years].includes(date["Order Date"].slice(-4)))
        return activitiesByYear
    }

    const allData = filterYear(sales && sales, [filterDate, filterDate])?.map((date) => (date))?.sort((a, b) => new Date(a.date?.["Order Date"]) < new Date(b.date?.["Order Date"]) ? 1 : -1)

    //Sum all monthly sales 
    const result = allData?.reduce(function (acc, obj) {
        const date = new Date(obj?.['Order Date']).toISOString().slice(0, 10)
        const key = date?.substr(0, 7);
        acc[key] = (acc[key] || 0) + +obj?.Sales;
        return acc;
    }, Object.create(null));

    //Return list of sales from Jan - Dec
    const list = result ? (Object.values(result)) : undefined;



    //Sum all monthly Profits
    const profit = allData?.reduce(function (acc, obj) {
        const date = new Date(obj?.['Order Date']).toISOString().slice(0, 10)
        const key = date?.substr(0, 7);
        acc[key] = (acc[key] || 0) + +obj?.Profit;
        return acc;
    }, Object.create(null));

    //Return list of Profits from Jan - Dec
    const arrProfit = result ? (Object.values(profit)) : undefined;


    const filterSalesData = async () => {
        dispatch({
            type: 'FETCHING'
        })
        let payload = {
            angular_test: "angular-developer"
        }
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/stub`, payload)
        if (data) {
            console.log("GET DATA", data)
            dispatch({
                type: "SUCCESS",
                payload: data
          })
        }
      }

    const handleChange = (e) => {
        setFilterDate(e.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoadingState("Almost Done...")
        }, 5000)
        
        filterSalesData();
    }, [])





    return (
        <div className='container'>
            <>
                {loading ?
                    <div className='loading-wrapper'>
                        <h3>{loadingState}</h3>
                        <Loader />
                    </div> :
                    <>   
                        <h2> SkyHigh Sales Report (2014 - 2017)</h2>    
                        <ChartComponent
                         salesData={list} 
                         monthlyProfit={arrProfit}
                         filterDate={filterDate}
                         handleChange={handleChange}
                         />
                    </>
                }
            </>
        </div>
    )
}

export default HomeComponent
