import React from 'react';
import Option from '../Option/Option';

const Question = ({ question }) => {
    const { options, correctAnswer, id } = question;
    const eachQuestion = question.question;
    console.log(options);
    return (
        <div className='mb-5'>
            <h3 className="mb-5 font-semibold text-gray-900 dark:text-white">{eachQuestion}</h3>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">

                {
                    options.map(option => <Option key={id} id={id} option={option}> </Option>)
                }

            </ul>
        </div>
    );
};

export default Question;