import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from './QuizData';

const TopicQuiz = () => {
    
    const {data} = useLoaderData();
    const quizdata = data.questions;
    
    return (
        <div className="container mx-auto my-12">
            <p className="bg-gray-100 p-4 text-3xl text-center font-bold my-8">
                Start Your Quiz
            </p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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