
import img1 from '../../assets/img.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.jpg'
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import { Component } from "react";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Utlies/Loading';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const NewAddedPet = () => {
    const plugins = [new Arrow(), new AutoPlay];
    const axiosPublic = useAxiosPublic()

    const { refetch, data: pets = [], isLoading } = useQuery({
        queryKey: ['pets'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/pets`)
            return res.data;
        }
    })

    return (
        <div className='mt-16'>

            <div className="text-center mb-9 dark:text-white">
                <h1 className="font-extrabold text-4xl  ">New Added Pet</h1>

            </div>

            <Flicking circular={true} plugins={plugins}>


                {pets.map(pet =>

                    <div className="card-panel"><span className="flicking-index">
                        <div class="dark:text-white bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                            <div>

                                <img src={pet.image} class="rounded-lg w-full h-[295px]" alt="not available" />
                                <h3 class=" ml-3 text-xl text-start font-bold mt-4 mb-2">{pet.name} {pet.age}</h3>
                                <div class="ml-3 text-start">
                                    <p>Age: {pet.age}</p>
                                    <p>Location: {pet.location} </p>
                                    <p >Category: {pet.category} </p>
                                </div>
                            </div>
                            <hr />
                            <div class="flex ml-3 mb-4 gap-4 mt-4">


                                {/* <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white " id='adopt-${element.petId}'  >Adopt</button> */}
                                <Link to={`/pet-details/${pet._id}`}>
                                    <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white" >Details</button>
                                </Link>
                            </div>
                        </div>
                    </span></div>
                )}

                {/* <div className="card-panel"><span className="flicking-index"></span></div>
                <div className="card-panel"><span className="flicking-index"></span></div> */}
                <ViewportSlot>
                    <span className="flicking-arrow-prev"></span>
                    <span className="flicking-arrow-next"></span>
                </ViewportSlot>
            </Flicking>;

            {/* <div className=' md:flex gap-6  '>
                       <div className="max-w-sm mx-auto mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                           <a href="#">
                               <img className="rounded-t-lg" src={img1} alt="" />
                           </a>
                           <div className="p-5">
                               <a href="#">
                                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Save a Life Today</h5>
                               </a>
                               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Every year, millions of pets wait for a second chance. Be the hero they need by giving them a forever home. Start your journey today!</p>
       
                           </div>
                       </div>
                       <div className="max-w-sm mx-auto mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                           <a href="#">
                               <img className="rounded-t-lg h-96" src={img2} alt="" />
                           </a>
                           <div className="p-5">
                               <a href="#">
                                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">A Better Life Awaits</h5>
                               </a>
                               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Adopting a pet means giving them a life filled with love, safety, and care. In return, you’ll receive unconditional love and endless joy.</p>
       
                           </div>
                       </div>
                       <div className="max-w-sm mx-auto  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                           <a href="#">
                               <img className="rounded-t-lg" src={img3} alt="" />
                           </a>
                           <div className="p-5">
                               <a href="#">
                                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Find Your Perfect Companion</h5>
                               </a>
                               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Discover the pet who is waiting just for you. Together, you can create a bond that lasts a lifetime. Adopt today and make a new best friend!</p>
       
                           </div>
                       </div>
                   </div> */}
        </div>
    );
};

export default NewAddedPet;