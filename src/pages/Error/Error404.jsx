import React from 'react';
import image from '../../assets/error.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center min-h-screen '>
                <Lottie className='w-1/2 mx-auto ' animationData={image}></Lottie>
                <div className=''>
                    <div
                        className='my-10 text-4xl font-bold'
                    >
                        Error 404 <br /> It looks like something went wrong.
                    </div>
                  
                    <Link to={'/'}> <button className="uppercase border px-6 py-2 rounded-xl hover:bg-gray-400 hover:text-white">
                        back home
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error404;