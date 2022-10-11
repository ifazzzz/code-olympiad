import React,{ useContext} from 'react';
import { TopicsContext } from '../Layout/Main';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const topics = useContext(TopicsContext)
    console.log(topics);
    return (
        <div>
            <div className="container my-48 mx-auto">
        <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={topics}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="total"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" />
          
        </BarChart>
      </ResponsiveContainer>
      </div>
        </div>
    );
};

export default Statistics;