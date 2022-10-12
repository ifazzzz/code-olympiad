import React, { useContext } from 'react';
import { TopicsContext } from '../Layout/Main';
import TopicData from './TopicData';


const Topics = () => {
    const topics = useContext(TopicsContext)
    return (
        <div className="container mx-auto my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {
            topics.map(topic => <TopicData
            key={topic.id}
            topic={topic}
            ></TopicData>)
           }
           
        </div>
        </div>
    );
};

export default Topics;