import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizQuestions = () => {
    const quizQuestions = useLoaderData();
    const { name, logo, questions } = quizQuestions.data;
    console.log()


    return (
        <div>
            <img className='w-1/6 mx-auto' src={logo} alt="" />
            <h1>Quiz of {name}</h1>
            {
                questions.map(question => <Question key={question.id} question={question}></Question>)
            }
        </div >
    );
};

export default QuizQuestions;