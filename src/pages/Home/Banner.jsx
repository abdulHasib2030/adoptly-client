import React from 'react';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'

const Banner = () => {
    return (
        <div className='mt-20'>
        <section>
            <div className="text-center  mx-auto dark:text-white md:flex justify-between  gap-9">
              <div className='md:w-2/3'>
              <h5 className="text-xl  font-bold mt-7"> Bringing Families Together ❤️‍🔥 </h5>
                <h1 className="md:text-7xl text-4xl font-extrabold mt-7"> Your Path to Adoption Starts Here</h1>
                <p className="mt-7">Embark on a journey to find your perfect companion with our easy and supportive adoption
                    platform. Browse, connect, and adopt from a variety of pets waiting for a loving home. Your path to
                    a lifelong friendship starts here!</p>
                <div className=" flex items-center justify-center">
                    {/* <button className="py-4 px-8 rounded-2xl flex bg-[#0E7A81] text-white font-bold mt-7 "><a
                            href="#adapt-best-friend">View
                            More</a></button> */}
              </div>

                </div>
                <div className='md:flex items-center justify-center gap-3 mt-5'>
                <img className="w-full md:w-52 h-72 rounded-full" src={banner1} alt="" />
                <img className="w-full md:w-52 h-72 rounded-full" src={banner2} alt="" />
                </div>
            </div>
        </section>
        </div>
    );
};

export default Banner;
