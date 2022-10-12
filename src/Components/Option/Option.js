import React from 'react';

const Option = ({ id, option }) => {
    return (

        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
                <input id={id + 1} type="radio" value="" name={id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor={id + 1} className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{option}</label>
            </div>
        </li>

    );
};

export default Option;