import React from 'react';
import { Link } from 'react-router-dom';

const TopicData = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (

            <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="text-gray-800">Total Questions : {total}</p>
                    </div>
                    <Link to={`/topics/${id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-emerald-800 text-gray-50">Start Quiz</button></Link>
                </div>
            </div>
    );
};

export default TopicData;