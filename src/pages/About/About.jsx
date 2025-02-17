import React from 'react';
import img from '../../assets/about.png'
// import { Search } from 'lucide-react';
import jwt from '../../assets/jwt.png';
import express from '../../assets/express.png';
import mongodb from '../../assets/mongodb.svg';
import react from '../../assets/react_js.webp';
import stripe from '../../assets/stripe.png';
import imgbb from '../../assets/imgbb.png';
const About = () => {
    return (
        <div className='mt-20 mb-44 container mx-auto dark:text-white'>
            <div className='md:flex gap-6'>
                <img src={img} className='w-full ' alt="" />
                <div className=' items-center text-justify flex flex-col justify-center'>
                    <h1 className='text-4xl font-bold pb-5'>Project <span className='text-[#125876]'>Overview</span> </h1>
                    <p className='text-xl'>The objective of this Pet Adoption Platform is to create a comprehensive, user-centric digital solution that facilitates pet adoptions and supports donation campaigns while ensuring efficient administrative management. The platform aims to connect potential adopters with pets in need, promote donation initiatives, and streamline the management of users, pets, and donations. It provides robust features, including secure payment processing, advanced search and filter options, and transparent donation tracking. Additionally, the platform empowers users to manage their pet listings, contributions, and refunds, while equipping administrators with tools to oversee platform activities, update user roles, and manage donation campaigns effectively. This project is designed to promote pet welfare, enhance user engagement, and ensure a secure and efficient adoption and donation process.</p>
                </div>
            </div>

            <div>
                <div className="space-y-2 py-20"><span className="text-4xl font-bold ">🚀 Features in Adoptly </span>
                    <br /><h1 className='text-2xl font-bold border-b-4 inline-block border-[#125876]'>User Eeatures</h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6'>
                        <div className='text-start'>
                            <h1 className='text-xl font-bold'>1. Pet Management: </h1>
                            <div className='pl-6 text-lg '>
                                <span className="text-lg font-bold"></span>
                                <li className="">Add new pets for adoption.</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">Update pet information.</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">Delete pet entries.</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">Mark pets as adopted.</li>
                            </div>

                        </div>
                        <div className='text-start'>
                            <h1 className='text-xl font-bold'>2. Donation Management:: </h1>
                            <div className='pl-6 text-lg '>
                                <span className="text-lg font-bold"></span>
                                <li className="">Add new donation campaigns.</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">Update donation campaign details.</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">View personal donation history.</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">Request a refund for donations.</li>
                            </div>

                        </div>
                        <div className='text-start'>
                            <h1 className='text-xl font-bold'>3. Pet Listing Page: </h1>
                            <div className='pl-6 text-lg '>
                                <span className="text-lg font-bold"></span>
                                <li className="">Search and filter pets by category (e.g., cats, dogs, etc.).</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">View detailed information about each pet.</li>

                            </div>

                        </div>
                        <div className='text-start'>
                            <h1 className='text-xl font-bold'>4. Donation Campaigns: </h1>
                            <div className='pl-6 text-lg '>
                                <span className="text-lg font-bold"></span>
                                <li className="">Donate to campaigns using Stripe payment integration.</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">View active and completed donation campaigns.</li>

                            </div>

                        </div>
                        <div className='text-start'>
                            <h1 className='text-xl font-bold'>5. User Dashboard: </h1>
                            <div className='pl-6 text-lg '>
                                <span className="text-lg font-bold"></span>
                                <li className="">View all pets added by the user.</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">Manage personal donations and refunds.</li>

                            </div>

                        </div>

                    </div>
                    <br />
                    <h1 className='text-2xl font-bold border-b-4 inline-block border-[#125876]'>Admin Eeatures</h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6'>
                        <div className='text-start'>
                            <h1 className='text-xl font-bold'>1. Admin Dashboard: </h1>
                            <div className='pl-6 text-lg '>
                                <span className="text-lg font-bold"></span>
                                <li className="">Overview of the platform’s activities.</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">Access and manage all registered users.</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">Update user roles (admin).</li>
                                {/* <span className="text-lg font-bold"></span>
                 <li className="">Access and manage all pets (Update, delete and mark as adopted pets).</li>
                </div> */}
                            </div>
                        </div>

                        <div className='text-start'>
                            <h1 className='text-xl font-bold'>2. Pet Management: </h1>
                            <div className='pl-6 text-lg '>
                                <span className="text-lg font-bold"></span>
                                <li className="">View all pets listed by users.</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">Edit, delete, or mark pets as adopted.</li>

                            </div>

                        </div>
                        <div className='text-start'>
                            <h1 className='text-xl font-bold'>3. Donation Campaign Management: </h1>
                            <div className='pl-6 text-lg '>
                                <span className="text-lg font-bold"></span>
                                <li className="">View all donation campaigns.</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">Edit or delete campaigns.</li>
                                <span className="text-lg font-bold"></span>
                                <li className="">Pause active donation campaigns.</li>

                            </div>

                        </div>
                    </div>


                    <br />
                    <h1 className='text-2xl font-bold border-b-4 inline-block border-[#125876]'>Additional Eeatures</h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6'>
                        <div className='text-start'>
                            <h1 className='text-xl font-bold'>1. Stripe Payment Integration: </h1>
                            <div className='pl-6 text-lg '>
                                <span className="text-lg font-bold"></span>
                                <li className="">Secure and seamless payment processing for donations.</li>
                            </div>
                        </div>
                        <div className='text-start'>
                            <h1 className='text-xl font-bold'>2. Search and Filter: </h1>
                            <div className='pl-6 text-lg '>
                                <span className="text-lg font-bold"></span>
                                <li className="">Enhanced search options for finding pets based on category and keywords.</li>

                            </div>

                        </div>
                        <div className='text-start'>
                            <h1 className='text-xl font-bold'>3. Refund Requests: </h1>
                            <div className='pl-6 text-lg '>
                                <span className="text-lg font-bold"></span>
                                <li className="">Users can request refunds for donations via their dashboard.</li>

                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <div className="space-y-2"><span className=" font-bold text-4xl ">Cutting-Edge Technologies Behind <span className='text-[#125876]'>Solutions</span>  </span>
                {/* {
              Object.entries(data.tech_stack).map(([key, value], index) => <div>
                <span className="text-lg font-bold">{index + 1}. {key} </span>
                {
                  value.map((val, idx) => <li className="text-sm">{val}</li>)
                }
              </div>)
            } */}
            </div>

            <div className="items-center flex-wrap gap-5 justify-center mt-9  flex ">
                <img className='w-32 h-full' src={react} alt="" />
                <img className='w-32 h-full' src={express} alt="" />
                <img className='w-32 h-full' src={mongodb} alt="" />
                <img className='w-32 h-full' src={jwt} alt="" />
                <img className='w-32 h-full' src={stripe} alt="" />
                <img className='w-32 h-full' src={imgbb} alt="" />
            </div>
        </div>

    );
};

export default About;