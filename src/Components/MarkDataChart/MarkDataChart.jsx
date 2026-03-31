import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarkDataChart = ({ marksPromises }) => {
    
    const markDatares = use(marksPromises);
    console.log(markDatares);
    const markData = markDatares.data;

    const markChartData = markData.map(data => {
        const student = {
            id: data.id,
            name: data.name,
            physics: data.marks.physics,
            chemistry: data.marks.chemistry,
            math: data.marks.math
        }
        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;
        // console.log(student);
        return student;
    })
    console.log(markChartData);
    return (
        <div>
            <BarChart width={500} height={300} data={markChartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'avg'} fill='green'></Bar>
            </BarChart>
        </div>
    );
};

export default MarkDataChart;