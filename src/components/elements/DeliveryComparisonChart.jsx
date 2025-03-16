import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DeliveryComparisonChart = () => {
    // Data extracted from the chart image
    const data = [
        {
            name: 'Fancurier',
            beforeDropX: 2.5,
            afterDropX: 3.2,
        },
        {
            name: 'Cargus',
            beforeDropX: 1.8,
            afterDropX: 2.6,
        },
        {
            name: 'Sameday',
            beforeDropX: 2.3,
            afterDropX: 3.0,
        },
        {
            name: 'UPS',
            beforeDropX: 0.8,
            afterDropX: 1.2,
        },
    ];

    return (
        <div className="chart-container">
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Chart Title</h2>
            <ResponsiveContainer width="100%" height="80%">
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="beforeDropX" name="Before DropX" fill="#0e5e7c" />
                    <Bar dataKey="afterDropX" name="After DropX" fill="#f47b3d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DeliveryComparisonChart;