import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-3/4' src={logo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{name} Quiz</h2>
                <p>This Quiz Has A Total of {total} Questions for you to answer</p>
                <div className="card-actions justify-center">
                    <Link to={`/quiz/${id}`} className="btn btn-primary">Start Quiz</Link >
                </div>
            </div>
        </div >
    );
};

export default Quiz;