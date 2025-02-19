import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Select from 'react-select';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import Loading from '../../components/Utlies/Loading';
import {  FaSortDown, FaSortUp } from "react-icons/fa";


const PetListing = () => {
    const [dropdown, setDropdown] = useState(true)
    const [selectedOption, setSelectedOption] = useState({ value: "all", label: "All Categories" });
    const [search, setSearch] = useState('')
    const [order, setOrder] = useState(false)
    const [petData, setPetData] = useState(null)
    const dropdowBtn = () => {
        dropdown ? setDropdown(false) : setDropdown(true)
    }
    const axiosPublic = useAxiosPublic()
    const {ref, inView} = useInView()

    const fetchPets = async (page) => {
        console.log(page);
        const response = await fetch(`https://adoptly-nine.vercel.app/pets-scroll?category=${selectedOption.value}&search=${search}&page=${page.pageParam}&limit=10`);
        const data = await response.json();
       console.log(data);
        return data;
    };


       const {
           data,
           fetchNextPage,
           hasNextPage,
           isFetching, isFetchingNextPage, refetch, isPending, error, isLoading
       } = useInfiniteQuery({
           queryKey: ['pet'],
           queryFn: fetchPets,
           staleTime: 10000,
           initialPageParam: 1, // Start at page 1
           getNextPageParam: (lastPage, allPages) => {
            // return lastPage?.hasMore ? allPages.length + 1 : undefined;
               return lastPage?.length  === null ? 0 : allPages?.length + 1
           },
       });

 

    const options = [
        { value: "all", label: "All Categories" },
        { value: 'cats', label: 'Cats' },
        { value: 'dogs', label: 'Dogs' },
        { value: 'rabbits', label: 'Rabbits' },
        { value: 'fist', label: 'Fish' },
        { value: 'birds', label: 'Birds' },
        { value: 'turtle', label: 'Turtle' },
        { value: 'others', label: 'others' },
    ];

 
   useEffect(() => {
          
           if (inView) {
               fetchNextPage()

           }
        if(search) refetch()
            
           
       }, [ inView, search])

   if(isPending || isLoading){
        return <Loading></Loading>
       }
       if(error){
        return <Loading></Loading>
       }



    let pets = data?.pages.flatMap(page => page.pets) || [];
    

    
 
       const handleAscenDescenOrder = () =>{
        order ? setOrder(false) : setOrder(true)
        if(order){
            let temp = pets.sort((a, b) => a.price - b.price)
            setPetData(temp)
        }
        else{
           let temp =  pets.sort((a, b) => b.price - a.price)
            setPetData(temp)
        }
       }
      
    return (
        <div className='mt-24'>
            {
                isLoading || isPending ? <Loading></Loading>: <div>
                    
                    <Helmet>
        <title>Adoptly | All pet</title>
    </Helmet>
            <div>
                <div className='md:flex items-center justify-between lg:mt-28 md:mt-32 mt-28'>
                <div class="max-w-lg  ">
                    <div class="flex relative">

                        <div className='w-1/2'>
                        <Select
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                        placeholder="All Categories"
                                    />

                        </div>

                        <div class="relative w-full">
                            <input type="search" onChange={(e)=> setSearch(e.target.value)} id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-[#0E7A81] focus:border-[#0E7A81] dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-[#0E7A81]" placeholder="Search pet name" required />
                            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#0E7A81] rounded-e-lg border border-[#0E7A81] hover:bg-[#0E7A81] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#0E7A81] dark:hover:bg-[#0E7A81] dark:focus:ring-[#0E7A81]">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* sort ascending and decending */}
                <div  className='text-black dark:text-white border p-2 rounded-xl cursor-pointer inline-block mt-3 md:mt-0 mr-5' onClick={handleAscenDescenOrder}>
                    {
                        order ? 
                        <p className='flex items-center '>Sort by ascending price <FaSortUp className='mt-2' /></p>:
                <p className='flex items-center '>Sort by descending price <FaSortDown /></p>
                    }
                </div>
                </div>

            </div>
            <div className="md:flex justify-between   items-center mt-9">
                
                <div id="spinner" className=" text-center mx-auto hidden">
                    <span className="text-center border-2 loading loading-bars loading-lg"></span>
                </div>
                <div id="item-show" className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-8'>
                    {
                        petData ?  
                        petData.map(pet =>
                            <div className='border-2 p-5 rounded-xl'>
                                <div className='text-start'>

                                    <img src={pet.image} class="rounded-xl w-full h-52" alt="not available" />
                                    <h3 class="text-xl font-bold mt-4 mb-2 dark:text-white">{pet.name}</h3>
                                    <div class="flex gap-4 justify-between dark:text-white items-center">

                                        <p>Age: {pet.age}</p> <p>Price: {pet.price}</p>
                                    </div>
                                    <div class="flex gap-4 dark:text-white items-center">

                                        <p>Location: {pet.location}</p>
                                    </div>

                                </div>
                                <hr />
                                <div class="flex gap-4 mt-4">
                                    {/* <div class="py-2 px-2 border-2 rounded-lg hover:border-[#0E7A81]" >
                                <img src="./images/favorite.png" alt="" class=" w-5 h-5" />
                            </div> */}

                                    {/* <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white " id='adopt-${element.petId}'  >Adopt</button> */}
                                    <Link to={`/pet-details/${pet._id}`}>
                                        <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white" >Details</button>
                                    </Link>
                                </div>
                            </div>) :
                            pets.map(pet =>
                                <div className='border-2 p-5 rounded-xl'>
                                    <div className='text-start'>
    
                                        <img src={pet.image} class="rounded-xl w-full h-52" alt="not available" />
                                        <h3 class="text-xl font-bold mt-4 mb-2 dark:text-white">{pet.name}</h3>
                                        <div class="flex gap-4 justify-between dark:text-white items-center">
    
                                            <p>Age: {pet.age}</p> <p>Price: {pet.price}</p>
                                        </div>
                                        <div class="flex gap-4 dark:text-white items-center">
    
                                            <p>Location: {pet.location}</p>
                                        </div>
    
                                    </div>
                                    <hr />
                                    <div class="flex gap-4 mt-4">
                                        {/* <div class="py-2 px-2 border-2 rounded-lg hover:border-[#0E7A81]" >
                                    <img src="./images/favorite.png" alt="" class=" w-5 h-5" />
                                </div> */}
    
                                        {/* <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white " id='adopt-${element.petId}'  >Adopt</button> */}
                                        <Link to={`/pet-details/${pet._id}`}>
                                            <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white" >Details</button>
                                        </Link>
                                    </div>
                                </div>) 
                    }
              <div ref={ref} ></div>

                </div>




            </div> 
                    </div>
            }
   
        </div>
    );
};

export default PetListing;