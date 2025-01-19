import React, { useState } from 'react';
import useMyDonation from '../../../hooks/useMyDonation';
import Loading from '../../../components/Utlies/Loading';
import { FaDollarSign, FaRegEdit } from "react-icons/fa";
import { Button, Modal } from "flowbite-react";
import { Link } from 'react-router-dom';

const MyAddedDonation = () => {
    const [refetch, donation, isLoading] = useMyDonation()
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            {
                isLoading ? <Loading></Loading> :
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Pet name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Maximum donation amount
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Donation progress bar
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Pause donation
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Edit
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        View Donators
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    donation.map(donate => <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {donate.name ? donate.name : "None"}
                                        </th>
                                        <td className="px-6 py-4 flex items-center">
                                            <FaDollarSign />  {donate.donation}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}  > 45%</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button class="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                                <span class="relative px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                    {donate.pause ? 'pause' : 'unpause'}
                                                </span>
                                            </button>
                                        </td>
                                        <td class="px-6 py-4">
                                            <Link to={`/dashboard/update-donation/${donate._id}`}>
                                            <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
                                                <FaRegEdit className='mr-1'></FaRegEdit> Edit
                                            </button></Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button type="button" onClick={() => setOpenModal(true)} class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View</button>
                                        </td>
                                    </tr>
                                    )
                                }


                            </tbody>
                        </table>
                    </div>
            }


            {/* modal */}



          
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={() => setOpenModal(false)}>I accept</Button> */}
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>


        </div>
    );
};

export default MyAddedDonation;