import React, { useState } from 'react';
import useMyDonation from '../../../hooks/useMyDonation';
import Loading from '../../../components/Utlies/Loading';
import { FaDollarSign, FaRegEdit } from "react-icons/fa";
import { Button, Modal } from "flowbite-react";
import { Link } from 'react-router-dom';

import ProgressBar from "@ramonak/react-progress-bar";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Table } from "flowbite-react";
import Swal from 'sweetalert2';
const MyAddedDonation = () => {
    const [refetch, donation, isLoading] = useMyDonation()
    const [openModal, setOpenModal] = useState(false);
    const [donateUser, setDonateUser] = useState([])

    const axiosSecure = useAxiosSecure()

    const handleViewDonationUser = async (donate) =>{
        setOpenModal(true)
        const res = await axiosSecure.get(`/payment-user/${donate._id}`)
        setDonateUser(res.data)
        console.log(res.data);
    }
    
    const handlePauseBtn = (id, pause) =>{
        Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: `Yes, ${pause?'Unpause':'Pause'} it!`
                }).then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.patch('/update-donation-status', {id:id, status: pause})
                        .then(res =>{
                            refetch()
                            Swal.fire({
                                title: "Accepted!",
                                text: "Successfully updated.",
                                icon: "success"
                            }); 
                        })
                    }
                });
    }

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
                                            <ProgressBar completed={Math.round((donate.collectDonation / donate.donation) * 100)} />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={()=> handlePauseBtn(donate._id, donate.pause)}  class="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                                <span class="relative px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                    {donate.pause ? 'unpause' : 'pause'}
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
                                            <button type="button" onClick={() => handleViewDonationUser(donate)} class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View</button>
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
          <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>User name</Table.HeadCell>
          <Table.HeadCell>Amount</Table.HeadCell>
          
        </Table.Head>
        <Table.Body className="divide-y">
            {
                donateUser && donateUser.map(donateUsr =>  
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {donateUsr.name}
            </Table.Cell>
            <Table.Cell> {donateUsr.amount}</Table.Cell>
          
          </Table.Row>)
            }
        
         
        </Table.Body>
      </Table>
    </div>
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