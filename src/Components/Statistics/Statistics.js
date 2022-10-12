import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Statistics = () => {
    const quizInfo = useLoaderData();
    const data = quizInfo.data;

    const renderBarChart = (
        <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="total" fill="#8884d8" barSize={30} />
        </BarChart>
    );
    return (
        <div className='w-1/2 mx-auto'>
            <h1 className='text-4xl my-5 font-bold'>This is a chart indicating how many question does each quiz have</h1>
            {renderBarChart}
        </div>
    );
};

export default Statistics;