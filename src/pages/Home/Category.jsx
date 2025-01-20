import React, { useEffect, useState } from 'react';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Utlies/Loading';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import image from '../../assets/banner1.jpg'
import { Link } from 'react-router-dom';

const Category = () => {
    const axiosPublic = useAxiosPublic()
    const [category, setCategory] = useState('')
    const { data: categoryes=[]} = useQuery({
        queryKey: ['categoryes',],
        queryFn: async()=>{
            const res = await fetch('/category.json')
            return res.json()
        }
    })
    const {refetch, data: pets=[], isLoading} = useQuery({
        queryKey: ['pets',],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/category-all-pets?category=${category}`)
            return res.data
        }
    })
   

    useEffect(()=>{
         refetch()
    }, [category])

    return (
        <div className='mt-16'>
            <h1 className="text-start text-4xl font-bold mb-6 dark:text-white">Category </h1>
            <Flicking moveType="freeScroll" bound={true} renderOnlyVisible={true}  >

        {
            
            categoryes.map(category=>
                
            <span  key={category.id} className='mr-10'>
                   <span onClick={()=>setCategory(category.name)} className="text-gray-900   bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700  mb-2">
                      <img src={category.icon} alt="" />
                     <h4>{category.name}</h4></span>
                    </span>)
        }
                


            </Flicking>

            {/* data  */}
            <div className=''>
                <Swiper watchSlidesProgress={true} slidesPerView={4} spaceBetween={20} 
                breakpoints={{
                    200:{
                        slidesPerView:1,

                    },
                    
                    768:{
                        slidesPerView: 2
                    },
                    1050:{
                        slidesPerView: 3
                    },
                    1200:{
                        slidesPerView:4
                    }
                }}
                className="mySwiper">

                    {
                        pets.length < 1 ? <p className='text-2xl font-bold my-5 dark:text-white'>This category not available pet.</p>:<>
                    {
                        isLoading ? <Loading></Loading>: 
                        pets.map(pet => <SwiperSlide>
                        <div className="md:flex mt-5 dark:text-white">
                            <div id="spinner" className=" text-center mx-auto hidden">
                                <span className="text-center border-2 loading loading-bars loading-lg"></span>
                            </div>
                            <div id="item-show">
                                <div className='border-2 p-5 rounded-xl '>
                                    <div>

                                        <img src={pet.image} class="rounded-lg w-full h-1/2" alt="not available" />
                                        <h3 class="text-xl text-start font-bold mt-4 mb-2">{pet.name} {pet.age}</h3>
                                        <div class=" ] text-start">
                                           
                                            <p>Age: {pet.age}</p>
                                        </div>
                                        <div class="flex gap-4  items-center">
                                           
                                            <p>Location: {pet.location} </p>
                                        </div>
                                        <div class="flex gap-4  items-center">
                                            
                                            <p >Category: {pet.category} </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="flex gap-4 mt-4">
                                        

                                        {/* <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white " id='adopt-${element.petId}'  >Adopt</button> */}
                                       <Link to={`/pet-details/${pet._id}`}>
                                        <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white" >Details</button>
                                       </Link>
                                    </div>
                                </div>
                            </div>




                        </div>

                    </SwiperSlide>  )
                    }
                   </>
                    }
                   
                </Swiper>
            </div>
        </div>
    );
};

export default Category;