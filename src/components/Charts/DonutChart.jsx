import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Solved", 11],
  ["New Cases", 3],
  ["Assigned", 7], // CSS-style declaration
];

export const options = {
  legend: {
    textStyle: {
      color: "#fff",
      fontSize: 16,
      // Set the color of the legend text
    },
    spacing: 20
  },
  pieHole: 0.6,
  is3D: false,
  backgroundColor: "#212529",
  color: "#fff",
  border: "white"
};


const piechartstyle = {

  width: '70%',
  marginTop: '10%',
  borderRadius: '50%',
  marginLeft: '4%'



}



const DonutChart = () => {
  return (
    <div style={piechartstyle}>

      <Chart
        chartType="PieChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  )
}

export default DonutChart