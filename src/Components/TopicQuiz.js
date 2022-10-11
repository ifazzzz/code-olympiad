import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from './QuizData';

const TopicQuiz = () => {
    const {data} = useLoaderData();
    const quizdata = data.questions;
    // const questions =quizdata[0];
    // console.log(quizdata,questions);
    
    return (
        <div>
            {
              quizdata.map(quiz => <QuizData
              key={quiz.id}
              quiz={quiz}
              ></QuizData>)
            }
        </div>
    );
};

export default TopicQuiz;