import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const RatingProgressChart = ({ ratings }) => {
    const formattedData = ratings.map(r => ({
        date: new Date(r.created_at).toLocaleDateString("cs-CZ",{
            day: "2-digit",
            month: "2-digit",
        }),
        rating: parseFloat(r.rating),
    }));

    return (
        <div style={{ width: "100%", height: 300 }}>
            <h3>Rating Progress:</h3>
            <ResponsiveContainer>
                <LineChart data={formattedData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 5]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="rating" stroke="#ffc107" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingProgressChart;