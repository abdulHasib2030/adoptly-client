import React, { useState } from 'react';

const PetListing = () => {
    const [dropdown, setDropdown] = useState(true)
    const dropdowBtn = () =>{
        dropdown ? setDropdown(false) : setDropdown(true)
    }
    console.log(dropdown);

    return (
        <div className='mt-24'>
           
            <div>

                <form class="max-w-lg mt-4 ">
                    <div class="flex relative">
                        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                        <button onClick={dropdowBtn} data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg></button>
                        <div  class={`z-10 bg-white top-12 ${dropdown && 'hidden'} absolute divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                                </li>
                            </ul>
                        </div>

                        <div class="relative w-full">
                            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-[#0E7A81] focus:border-[#0E7A81] dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-[#0E7A81]" placeholder="Search pet name" required />
                            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#0E7A81] rounded-e-lg border border-[#0E7A81] hover:bg-[#0E7A81] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#0E7A81] dark:hover:bg-[#0E7A81] dark:focus:ring-[#0E7A81]">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            <div className="md:flex mt-9">
                <div id="spinner" className=" text-center mx-auto hidden">
                    <span className="text-center border-2 loading loading-bars loading-lg"></span>
                </div>
                <div id="item-show" className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='border-2 p-5 rounded-xl'>
                        <div>

                            <img src="" class="rounded-lg" alt="not available" />
                            <h3 class="text-xl font-bold mt-4 mb-2"></h3>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <img src="./images/menu.png" class="w-4 h-4" alt="" />
                                <p></p>
                            </div>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <i class="fa-solid fa-cake-candles w-4 h-4"></i>
                                <p>Birth: </p>
                            </div>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <i class="fa-solid fa-venus"></i>
                                <p>Gender: </p>
                            </div>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <i class="fa-solid fa-dollar-sign"></i>
                                <p >Price:  </p>
                            </div>
                        </div>
                        <hr />
                        <div class="flex gap-4 mt-4">
                            {/* <div class="py-2 px-2 border-2 rounded-lg hover:border-[#0E7A81]" >
                                <img src="./images/favorite.png" alt="" class=" w-5 h-5" />
                            </div> */}

                            {/* <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white " id='adopt-${element.petId}'  >Adopt</button> */}
                            <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white" >Details</button>
                        </div>
                    </div>
                    <div className='border-2 p-5 rounded-xl'>
                        <div>

                            <img src="" class="rounded-lg" alt="not available" />
                            <h3 class="text-xl font-bold mt-4 mb-2"></h3>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <img src="./images/menu.png" class="w-4 h-4" alt="" />
                                <p></p>
                            </div>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <i class="fa-solid fa-cake-candles w-4 h-4"></i>
                                <p>Birth: </p>
                            </div>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <i class="fa-solid fa-venus"></i>
                                <p>Gender: </p>
                            </div>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <i class="fa-solid fa-dollar-sign"></i>
                                <p >Price:  </p>
                            </div>
                        </div>
                        <hr />
                        <div class="flex gap-4 mt-4">
                            <div class="py-2 px-2 border-2 rounded-lg hover:border-[#0E7A81]" >
                                <img src="./images/favorite.png" alt="" class=" w-5 h-5" />
                            </div>

                            <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white " id='adopt-${element.petId}'  >Adopt</button>
                            <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white" >Details</button>
                        </div>
                    </div>
                    <div className='border-2 p-5 rounded-xl'>
                        <div>

                            <img src="" class="rounded-lg" alt="not available" />
                            <h3 class="text-xl font-bold mt-4 mb-2"></h3>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <img src="./images/menu.png" class="w-4 h-4" alt="" />
                                <p></p>
                            </div>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <i class="fa-solid fa-cake-candles w-4 h-4"></i>
                                <p>Birth: </p>
                            </div>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <i class="fa-solid fa-venus"></i>
                                <p>Gender: </p>
                            </div>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <i class="fa-solid fa-dollar-sign"></i>
                                <p >Price:  </p>
                            </div>
                        </div>
                        <hr />
                        <div class="flex gap-4 mt-4">
                            <div class="py-2 px-2 border-2 rounded-lg hover:border-[#0E7A81]" >
                                <img src="./images/favorite.png" alt="" class=" w-5 h-5" />
                            </div>

                            <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white " id='adopt-${element.petId}'  >Adopt</button>
                            <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white" >Details</button>
                        </div>
                    </div>
                    <div className='border-2 p-5 rounded-xl'>
                        <div>

                            <img src="" class="rounded-lg" alt="not available" />
                            <h3 class="text-xl font-bold mt-4 mb-2"></h3>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <img src="./images/menu.png" class="w-4 h-4" alt="" />
                                <p></p>
                            </div>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <i class="fa-solid fa-cake-candles w-4 h-4"></i>
                                <p>Birth: </p>
                            </div>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <i class="fa-solid fa-venus"></i>
                                <p>Gender: </p>
                            </div>
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                <i class="fa-solid fa-dollar-sign"></i>
                                <p >Price:  </p>
                            </div>
                        </div>
                        <hr />
                        <div class="flex gap-4 mt-4">
                            <div class="py-2 px-2 border-2 rounded-lg hover:border-[#0E7A81]" >
                                <img src="./images/favorite.png" alt="" class=" w-5 h-5" />
                            </div>

                            <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white " id='adopt-${element.petId}'  >Adopt</button>
                            <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white" >Details</button>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default PetListing;