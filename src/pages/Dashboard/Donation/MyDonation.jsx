import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../../components/Utlies/Loading';

const MyDonation = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()

    const {refetch, data: myDonations=[], isLoading} = useQuery({
        queryKey: ['myDonations'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/my-donations?email=${user.email}`)
            console.log(res.data);
            return res.data;
        }
    })

    return (
        <div>
            {
                isLoading?<Loading/>:
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Pet Image</th>
                            <th scope="col" className="px-6 py-3">Pet Name</th>
                            <th scope="col" className="px-6 py-3">Donated Amount</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myDonations.map(donation =>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">
                                <img src={donation.image} alt="Pet Image" className="w-12 h-12 rounded-full" />
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                {donation.name}
                            </td>
                            <td className="px-6 py-4">
                                {donation.donation}
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800">
                                    Ask for Refund
                                </button>
                            </td>
                        </tr> )
                        }

                        

                    </tbody>
                </table>
            </div>
            }

        </div>
    );
};

export default MyDonation;