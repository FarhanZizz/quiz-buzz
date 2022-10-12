import React from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const Question = ({ question }) => {
    const { options, correctAnswer, id } = question;
    const eachQuestion = question.question;
    if (options.length !== 4) {
        options[3] = "Data Not Found";
    }
    const HandleOptionClick = (answer) => {
        if (answer === correctAnswer) {
            toast.success('Correct answer :)', {
                position: "top-center",
                autoClose: 500,
                theme: "dark",
            });
        }
        else {
            toast.error('Wrong Answer :(', {
                position: "top-center",
                autoClose: 500,
                theme: "dark",
            });
        }
    }
    const HandleAnsBtn = () => {
        toast.success(`Correct Answer: ${correctAnswer}`, {
            position: "top-center",
            autoClose: 5000,
            theme: "dark",
        });
    }
    return (

        <div className='mb-5'>
            <div className="flex w-2/3 mx-auto">
                <h3 className="mb-5 font-semibold text-gray-900 dark:text-white  mx-auto">{eachQuestion}</h3>
                <button onClick={HandleAnsBtn} className='btn btn-circle btn-outline btn-sm'><FontAwesomeIcon className='w-3/6' icon={faEye} /></button>
            </div>

            <ul className=" grid md:grid-cols-2 w-2/3 mx-auto text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input onClick={() => HandleOptionClick(options[0])} id={id + 1} type="radio" value='' name={id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor={id + 1} className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[0]}</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input onClick={() => HandleOptionClick(options[1])} id={id + 2} type="radio" value='' name={id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor={id + 2} className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[1]}</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input onClick={() => HandleOptionClick(options[2])} id={id + 3} type="radio" value='' name={id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor={id + 3} className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[2]}</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input onClick={() => HandleOptionClick(options[3])} id={id + 4} type="radio" value='' name={id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor={id + 4} className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{options[3]}</label>
                    </div>
                </li>
            </ul>

        </div >
    );
};

export default Question;