import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizInfo = useLoaderData();
    const data = quizInfo.data;

    const renderBarChart = (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart width={450} height={300} data={data}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="total" fill="#8884d8" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
    return (
        <div className='w-2/3 mx-auto '>
            <h1 className='text-4xl my-5 font-bold'>This is a chart indicating how many question does each quiz have</h1>
            <div>
                {renderBarChart}
            </div>
        </div>
    );
};

export default Statistics;