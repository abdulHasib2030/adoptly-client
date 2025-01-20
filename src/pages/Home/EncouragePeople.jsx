import React from 'react';
import img1 from '../../assets/img4.jpg'
import img2 from '../../assets/img1.jpg'
import img3 from '../../assets/img3.jpg'
const EncouragePeople = () => {
    return (
        <div className='mt-16'>

            <div className="text-center mb-9 dark:text-white">
                <h1 className="font-extrabold text-4xl  ">Change a Life, Find a Friend for Life</h1>
                <p className="mt-5">Open your heart and home to a furry friend in need. Your love can make all the difference!</p>
            </div>

            <div className=' md:flex gap-6  '>
                <div className="max-w-sm mx-auto mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    
                        <img className="rounded-t-lg h-96" src={img1} alt="" />
                   
                    <div className="p-5">
                      
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Save a Life Today</h5>
                      
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Every year, millions of pets wait for a second chance. Be the hero they need by giving them a forever home. Start your journey today!</p>

                    </div>
                </div>
                <div className="max-w-sm mx-auto mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                   
                        <img className="rounded-t-lg h-96" src={img2} alt="" />
              
                    <div className="p-5">
                       
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">A Better Life Awaits</h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Adopting a pet means giving them a life filled with love, safety, and care. In return, you’ll receive unconditional love and endless joy.</p>

                    </div>
                </div>
                <div className="max-w-sm mx-auto mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                   
                        <img className="rounded-t-lg h-96" src={img3} alt="" />
                  
                    <div className="p-5">
                      
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Find Your Perfect Companion</h5>
                      
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Discover the pet who is waiting just for you. Together, you can create a bond that lasts a lifetime. Adopt today and make a new best friend!</p>

                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default EncouragePeople;