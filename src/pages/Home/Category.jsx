import React from 'react';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Category = () => {
    return (
        <div className='mt-16'>
            <h1 className="text-start text-4xl font-bold mb-6 dark:text-white">Category </h1>
            <Flicking moveType="freeScroll" bound={true} >

                <span className="text-gray-900    bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700  mb-2">
                    <img src="https://i.ibb.co.com/N7dM2K1/cat.png" alt="" className='mb-1' />
                    Cat</span>


            </Flicking>

            {/* data  */}
            <div className='mt-6'>
                <Swiper watchSlidesProgress={true} slidesPerView={4} className="mySwiper">
                    <SwiperSlide>
                        <div className="md:flex mt-9">
                            <div id="spinner" className=" text-center mx-auto hidden">
                                <span className="text-center border-2 loading loading-bars loading-lg"></span>
                            </div>
                            <div id="item-show">
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

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:flex mt-9">
                            <div id="spinner" className=" text-center mx-auto hidden">
                                <span className="text-center border-2 loading loading-bars loading-lg"></span>
                            </div>
                            <div id="item-show">
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

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:flex mt-9">
                            <div id="spinner" className=" text-center mx-auto hidden">
                                <span className="text-center border-2 loading loading-bars loading-lg"></span>
                            </div>
                            <div id="item-show">
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

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:flex mt-9">
                            <div id="spinner" className=" text-center mx-auto hidden">
                                <span className="text-center border-2 loading loading-bars loading-lg"></span>
                            </div>
                            <div id="item-show">
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

                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Category;