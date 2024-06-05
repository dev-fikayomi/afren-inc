// import { toBeRequired } from "@testing-library/jest-dom/matchers";
import React from "react";
import { Line } from "react-chartjs-2";

export const LineChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: false,
              },
              legend: {
                display: false
              }
            },
            interaction: {
              intersect: false,
            },
            scales: {
              x: {
                display: false
              },
              y: {
                display: false,
              },
            }
        }}
      />
    </div>
  );
}