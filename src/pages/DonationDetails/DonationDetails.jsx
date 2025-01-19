import React, { useState } from 'react';
import image from '../../assets/banner2.jpg'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation } from 'react-router-dom';
import Loading from '../../components/Utlies/Loading';
import { Button, Modal } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../Payment/CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)


const DonationDetails = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const [openModal, setOpenModal] = useState(false);
    const location = useLocation()
    const path = location.pathname.split('/')[3]
    const [recomendedDonation, setRecomendedDonation] = useState(localStorage.getItem('recomDonation', false))

    const { refetch, data: donation, isLoading } = useQuery({
        queryKey: ['donation'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/donation/${path}`)
            return res.data;
        }
    })
    let description;
    isLoading ? description = "" : description = donation.recomDonation[0].description


    return (
        <div className='mt-16'>
            {
                isLoading ? <Loading></Loading> :
                <div>
                    <div>
                        <div className='h-96 w-full mx-auto border-2'>
                            <img src={donation.recomDonation[0].image} className='h-full w-full' alt="" />
                        </div>

                        <div className='mt-5 grid md:grid-cols-12 gap-4'>
                            <div className="w-full  md:col-span-8 space-y-2 p-4 text-start bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Name of pet <span className='font-semibold'>{donation.recomDonation[0].name}</span></h5>
                                <div className='dark:text-white'>
                                    <ul className='list-disc text-start dark:text-white grid grid-cols-2 gap-3'>
                                        <li className='font-bold'>Maximum donation amount: <span className='font-normal'>  {donation.recomDonation[0].donation}</span></li>
                                        <li className='font-bold'>Last date:  <span className='font-normal'> {donation.recomDonation[0].lst_date}</span></li>
                                        <li className='font-bold'>Added date:  <span className='font-normal'> {donation.recomDonation[0].date}</span></li>
                                        <li className='font-bold'>user:  <span className='font-normal'>{donation.recomDonation[0].user}</span> </li>

                                    </ul>
                                    <p className='text-start mt-2 dark:text-white font-bold'>Short Description: <span className='font-normal'>{donation.recomDonation[0].shortDescription}</span></p>
                                    <p className='font-bold dark:text-white'>Description:</p>
                                    <div className='' dangerouslySetInnerHTML={{ __html: description }} />
                                </div>
                            </div>

                            <div className='md:col-span-4'>
                                <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <img src="https://img.icons8.com/?size=100&id=BenvGuODqUWH&format=png&color=000000" alt="" className='w-20 mx-auto mb-2' />
                                    <button onClick={() => setOpenModal(true)} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Donate now
                                        </span>
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
            {/* modal */}
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Donate for  </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">

                        <div className="space-y-4">


                          
                            <div>
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm closeModal={setOpenModal} recomendedDonation={setRecomendedDonation} donation={donation.recomDonation[0]}></CheckoutForm>
                                </Elements>
                            </div>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Recomened donation section */}
            {recomendedDonation && <div className='my-16'>
            <h1 className='dark:text-white text-3xl font-bold mb-5'>Recommended Donations</h1>

             <div id="item-show" className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 dark:text-white '>
                     <div className='border-2 p-5 rounded-xl'>
                        <div className='text-start'>

                            <img src="" class="rounded-lg" alt="not available" />
                            <h3 class="text-xl font-bold mt-4 mb-2">""</h3>
                            
                            <div class="flex gap-4  items-center">
                                
                                <p>Maximum Donation Amount: </p>
                            </div>
                            <div class="flex gap-4  items-center">
                                
                                <p>Donated amount:  </p>
                            </div>
                           
                        </div>
                        <hr />
                        <div class="flex gap-4 mt-4">
                            {/* <div class="py-2 px-2 border-2 rounded-lg hover:border-[#0E7A81]" >
                                <img src="./images/favorite.png" alt="" class=" w-5 h-5" />
                            </div> */}

                            {/* <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white " id='adopt-${element.petId}'  >Adopt</button> */}
                           <Link to={`/donation-campain/details/1`}>
                           <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white" >Details</button>
                           </Link> 
                        </div>
                    </div>   
                 
                    
                </div>   
            </div>
            }
            </div>
            }

        </div>
    );
};

export default DonationDetails;