import React from 'react';
import Quiz from '../quiz/Quiz';

const QuizMenu = () => {
    return (
        <div >
            <h1 className='text-3xl my-5'>Popular Quizzes</h1>
            <div className='grid grid-cols-1 w-3/4 mx-auto'>
                <Quiz></Quiz>
                <Quiz></Quiz>
                <Quiz></Quiz>
            </div>
        </div >
    );
};

export default QuizMenu;