import React from 'react';

const QuizData = ({quiz}) => {
    const {options, question, correctAnswe} = quiz;
    const [q1, q2, q3, q4] = options;
    console.log(options);
    return (
        <div>
            <p>{question}</p>
            <div className="my-12">
               <p>{q1}</p>
               <p>{q2}</p>
               <p>{q3}</p>
               <p>{q4}</p> 
            </div>
            
        </div>
    );
};

export default QuizData;