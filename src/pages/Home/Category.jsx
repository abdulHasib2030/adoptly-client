import React from 'react';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
const Category = () => {
    return (
        <div className='my-16'>
            <h1 className="text-start text-4xl font-bold mb-6 dark:text-white">Category </h1>
            <Flicking moveType="freeScroll" bound={true}>
              
                <span className="text-gray-900  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">Apple</span>

            </Flicking>;
        </div>
    );
};

export default Category;