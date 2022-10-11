import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../quiz/Quiz';

const QuizMenu = () => {
    const quizInfo = useLoaderData();
    return (
        <div >
            <h1 className='text-3xl my-5'>Popular Quizzes</h1>
            <div className='grid md:grid-cols-2  gap-5 '>
                {
                    quizInfo.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div >
    );
};

export default QuizMenu;