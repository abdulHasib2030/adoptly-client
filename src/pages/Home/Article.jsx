import React from 'react';
import dog from '../../assets/cute-dog.webp'
import cat from '../../assets/kitten.webp'
import { Card } from 'flowbite-react';
const Article = () => {
    return (
        <div className='mt-16 dark:text-white gap-5  md:flex justify-evenly items-center'>
            <div className='border dark:border-gray-600 rounded-xl pb-5 text-center space-y-9 relative'>
                <img src={dog} alt="" className='w-full rounded-tr-xl rounded-tl-xl'/>
                
                <h1 className='text-3xl font-semibold'>Dog Adoption Articles</h1>
                <p>Learn more about caring for your new dog</p>
                <button class="py-2  w-44 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white uppercase" >Read More</button>
            </div>
            <div className='border dark:border-gray-600 rounded-xl mt-5 md:mt-0 pb-5 text-center space-y-9 relative'>
                <img src={cat} alt="" className='w-full rounded-tr-xl rounded-tl-xl'/>
                
                <h1 className='text-3xl font-semibold'>Cat Adoption Articles</h1>
                <p>Helpful insights on what to expect</p>
                <button class="py-2  w-44 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white uppercase" >Read More</button>
            </div>
        </div>
    );
};

export default Article;