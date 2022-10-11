import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
const QuizData = ({quiz}) => {
    const {options, question, correctAnswe} = quiz;
    const [q1, q2, q3, q4] = options;
    console.log(options);
    return (
        <div className="p-10 bg-gray-100">
            <p>{question}</p>
            <div className="p-6 my-12 grid grid-cols-1 gap-2">
                <div>
                  <input type="radio" value={q1} name="option"/>{q1}
                </div>             
                <div>
                  <input type="radio" value={q2} name="option"/>{q2}
                </div>
                <div>
                  <input type="radio" value={q3} name="option"/>{q3}
                </div>
                <div>
                  <input type="radio" value={q4} name="option"/>{q4} 
                </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <p>View The Answer : </p>
              </div>
              <div className="w-5 h-5">
                <EyeIcon></EyeIcon>
              </div>
            </div>
        </div>
    );
};

export default QuizData;