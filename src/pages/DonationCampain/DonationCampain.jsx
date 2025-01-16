import React from 'react';
import { Link } from 'react-router-dom';

const DonationCampain = () => {
    return (
        <div className='my-32'>
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
                           <Link to={'/donation-campain/details/1'}>
                           <button class="py-2 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white" >Details</button>
                           </Link> 
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
    );
};

export default DonationCampain;