import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from './QuizData';

const TopicQuiz = () => {
    const {data} = useLoaderData();
    const quizdata = data.questions;
    // const questions =quizdata[0];
    // console.log(quizdata,questions);
    
    return (
        <div className="container mx-auto my-12">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
           {
              quizdata.map(quiz => <QuizData
              key={quiz.id}
              quiz={quiz}
              ></QuizData>)
            }
           </div>
        </div>
    );
};

export default TopicQuiz;