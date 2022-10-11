import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const QuizData = ({quiz}) => {
    const {options, question, correctAnswer} = quiz;
    // console.log(correctAnswer);
    // console.log(correctAnswer);
    const [op1, op2, op3, op4] = options;
    // console.log(options);
    let result;

    const checkAnswer = (answer) => {
       if (answer === correctAnswer) {
        result = true;
       }
       else{
        result = false;
       }
       result ? (toast.success("Correct Answer", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })) : (toast.error("wrong Answer", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }))
      
    }

const showToastMessage = () => {
  toast.info(correctAnswer, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}
    return (

        <div className="p-10 bg-gray-100">
            <p>{question}</p>
            <div className="p-6 my-12 grid grid-cols-1 gap-2">
                <div>
                  <button onClick={() => checkAnswer(op1)}><input type="radio" value={op1} name="option" />{op1}</button>
                </div>             
                <div>
                  <button onClick={() => checkAnswer(op2)}><input type="radio" value={op2} name="option" />{op2}</button>
                </div>
                <div>
                  <button onClick={() => checkAnswer(op3)}><input type="radio" value={op3} name="option" />{op3}</button>
                </div>
                <div>
                 <button onClick={() => checkAnswer(op4)}><input type="radio" value={op4} name="option" />{op4}</button>
                </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <p>View The Answer : </p>
              </div>
              <button onClick={showToastMessage}>
              <div className="w-5 h-5">
                <EyeIcon></EyeIcon>
              </div>
              </button>
            </div>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        </div>
         
    );
};

export default QuizData;