import React,{ useContext} from 'react';
import { TopicsContext } from '../Layout/Main';
import Chart from './Chart';

const Statistics = () => {
    // const topics= useContext(TopicsContext);

    return (
        <div>
            <Chart></Chart>
        </div>
    );
};

export default Statistics;