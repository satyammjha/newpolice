import React from 'react';
import { Chart } from 'react-google-charts';
import './linechart.css'

const CrimeRateLineChart = () => {
  const data = [
    ['Date', 'Crime Rate'],
    ['2023-10-01', 10],
    ['2023-10-02', 8],
    ['2023-10-03', 12],
    ['2023-10-04', 9],
    ['2023-10-05', 11],
    ['2023-10-06', 7],
    ['2023-10-07', 14],
    ['2023-10-08', 13],
    ['2023-10-09', 10],
    ['2023-10-10', 11],
    ['2023-10-11', 9],
    ['2023-10-12', 12],
    ['2023-10-13', 8],
    ['2023-10-14', 10],
    ['2023-10-15', 11],
    ['2023-10-16', 9],
    ['2023-10-17', 13],
    ['2023-10-18', 12],
    ['2023-10-19', 8],
    ['2023-10-20', 10],
    ['2023-10-21', 7],
    ['2023-10-22', 11],
    ['2023-10-23', 9],
    ['2023-10-24', 12],
    ['2023-10-25', 10],
    ['2023-10-26', 13],
    ['2023-10-27', 14],
    ['2023-10-28', 12],
    ['2023-10-29', 11],
    ['2023-10-30', 10],
    ['2023-10-31', 9],
  ];

  const options = {
    title: 'Crime Rate in Chandigarh (Past One Month)',
    hAxis: {
      title: 'Date',
      titleTextStyle: {
        color: 'white', // Set hAxis text color to white
      },
      textStyle: {
        color: 'white', // Set hAxis text color to white
      },
    },
    vAxis: {
      title: 'Crime Rate',
      textStyle: {
        color: 'white', // Set vAxis text color to white
      },
      titleTextStyle: {
        color: 'white', // Set vAxis text color to white
      },
    },
    legend: 'none',
    backgroundColor: '#14161F',
    titleTextStyle: {
      color: 'white', // Set title text color to white
    },
  };


  const style = {
    marginTop: '50px'
  }
  return (
    <div style={style}>
      <div className="lineChartTop ">
        <h3 className='pastMonths'>Past month</h3>
        <h3 className='svnDays activeMonthLineChart'>7 days</h3>
      </div>
      <Chart
        chartType="AreaChart"
        width="75.4%"
        height="80%"
        data={data}
        options={options}
      />
    </div>
  );
};

export default CrimeRateLineChart;