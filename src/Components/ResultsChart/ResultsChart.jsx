import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';


const marks = [
  {
    id: 1,
    name: "Rahim",
    physics: 85,
    chemistry: 78,
    math: 90,
  },
  {
    id: 2,
    name: "Karim",
    physics: 70,
    chemistry: 75,
    math: 80,
  },
  {
    id: 3,
    name: "Ayesha",
    physics: 92,
    chemistry: 88,
    math: 95,
  },
  {
    id: 4,
    name: "Nusrat",
    physics: 88,
    chemistry: 82,
    math: 85,
  },
  {
    id: 5,
    name: "Sakib",
    physics: 65,
    chemistry: 70,
    math: 72,
  },
  {
    id: 6,
    name: "Tania",
    physics: 80,
    chemistry: 85,
    math: 83,
  },
  {
    id: 7,
    name: "Hasan",
    physics: 60,
    chemistry: 68,
    math: 70,
  },
  {
    id: 8,
    name: "Mim",
    physics: 95,
    chemistry: 90,
    math: 98,
  },
  {
    id: 9,
    name: "Rafi",
    physics: 75,
    chemistry: 72,
    math: 78,
  },
  {
    id: 10,
    name: "Jannat",
    physics: 85,
    chemistry: 80,
    math: 88,
  },
];

const ResultsChart = () => {
    return (
      <div>
        <LineChart width={800} height={500} data={marks}>
          <Line dataKey="math"></Line>
          <Line dataKey={"physics"} stroke="red"></Line>
          <Line dataKey={"chemistry"} stroke="green"></Line>
          <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Legend></Legend>
            <CartesianGrid></CartesianGrid>
        </LineChart>
      </div>
    );
};

export default ResultsChart;