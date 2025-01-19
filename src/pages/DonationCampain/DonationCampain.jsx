import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Loading from '../../components/Utlies/Loading';

const DonationCampain = () => {
    const axiosPublic = useAxiosPublic()
    const {refetch, data:donations=[], isLoading} = useQuery({
        queryKey: ['donations'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/donation')
            return res.data;
        }
    })

    return (
        <div className='my-32'>
            {
                isLoading ? <Loading></Loading>:
             <div id="item-show" className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    donations.map(donation =>
                     <div className='border-2 p-5 rounded-xl'>
                        <div>

                            <img src={donation.image} class="rounded-lg" alt="not available" />
                            <h3 class="text-xl font-bold mt-4 mb-2"></h3>
                            
                            <div class="flex gap-4 text-[#131313B3] items-center">
                                
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
                    )
                }
                    
                    
                </div>
            }
        </div>
    );
};

export default DonationCampain;