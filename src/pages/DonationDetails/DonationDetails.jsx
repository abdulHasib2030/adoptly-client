import React from 'react';
import image from '../../assets/banner2.jpg'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Utlies/Loading';
const DonationDetails = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const location = useLocation()
    const path = location.pathname.split('/')[3]
    console.log(path);
    const {refetch, data:donation, isLoading} = useQuery({
        queryKey:['donation'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/donation/${path}`)
            return res.data;
        }
    })
    let description;
    isLoading ? description = "" : description= donation.description

    return (
         <div className='mt-16'>
            {
                isLoading ? <Loading></Loading>:
                    <div>
                        <div className='h-96 w-full mx-auto border-2'>
                            <img src={donation.image} className='h-full w-full' alt="" />
                        </div>
        
                        <div className='mt-5 grid md:grid-cols-12 gap-4'>
                            <div className="w-full  md:col-span-8 space-y-2 p-4 text-start bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Name of pet <span className='font-semibold'>{donation.name}</span></h5>
                                <div>
                                    <ul className='list-disc text-start grid grid-cols-2 gap-3'>
                                        <li className='font-bold'>Maximum donation amount: <span className='font-normal'>  {donation.donation}</span></li>
                                        <li className='font-bold'>Last date:  <span className='font-normal'> {donation.lst_date}</span></li>
                                        <li className='font-bold'>Added date:  <span className='font-normal'> {donation.date}</span></li>
                                        <li className='font-bold'>user:  <span className='font-normal'>{donation.user}</span> </li>
                                        
                                    </ul>
                                    <p className='text-start mt-2 font-bold'>Short Description: <span className='font-normal'>{donation.shortDescription}</span></p>
                                    <p className='font-bold'>Description:</p>
                                    <div dangerouslySetInnerHTML={{ __html: description }} />
                                </div>
                            </div>

                            <div className='md:col-span-4'>
                                <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <img src="https://img.icons8.com/?size=100&id=BenvGuODqUWH&format=png&color=000000" alt="" className='w-20 mx-auto mb-2' />
                                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Donate now
                                        </span>
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
            }
                </div>
    );
};

export default DonationDetails;