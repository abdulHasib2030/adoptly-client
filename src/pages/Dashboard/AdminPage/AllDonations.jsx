import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../../components/Utlies/Loading';
import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleUp, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Helmet } from 'react-helmet-async';

const AllDonations = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: donations = [], isLoading } = useQuery({
        queryKey: ['donations'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-donation')
            return res.data
        }
    })

    const handleDonationDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/donation-delete/${id}`)
                    .then(res => {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })

            }
        });
    }

    const handleDonationStatus = (id, status) => {
        axiosSecure.patch('/update-donation-status', { id: id, status: status })
            .then(res => {
                refetch()
                toast.success(`Successfully paused updated`)
            })
    }
    
    return (
        <div>

            {
                isLoading ? <Loading /> :
                    <div className="overflow-x-auto">
                        <Helmet>
                            <title>All donations</title>
                        </Helmet>
                        <Table striped>
                            <Table.Head>
                                <Table.HeadCell>Pet name</Table.HeadCell>
                                <Table.HeadCell>pet image</Table.HeadCell>
                                <Table.HeadCell>donation</Table.HeadCell>
                                <Table.HeadCell>last date</Table.HeadCell>
                                <Table.HeadCell>
                                    short Description
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    added date
                                </Table.HeadCell>

                                <Table.HeadCell>
                                    user
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Paused
                                </Table.HeadCell>

                                <Table.HeadCell>
                                    Actions
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {
                                    donations.map(Donation =>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {Donation.name}
                                            </Table.Cell>
                                            <Table.Cell> <img src={Donation.image} className='w-10' alt="" /> </Table.Cell>
                                            <Table.Cell>{Donation.donation}</Table.Cell>
                                            <Table.Cell>{Donation.lst_date}</Table.Cell>
                                            <Table.Cell>{Donation.shortDescription}</Table.Cell>
                                            <Table.Cell>{Donation.date}</Table.Cell>
                                            <Table.Cell>{Donation.user}</Table.Cell>
                                            <Table.Cell>{Donation.pause ? "True" : "False"}</Table.Cell>

                                            <Table.Cell className='flex' >
                                                <Link to={`/dashboard/update-donation/${Donation._id}`}>
                                                    <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
                                                        <FaRegEdit className='mr-1'></FaRegEdit> Edit
                                                    </button></Link>
                                                <button type="button" onClick={() => handleDonationDelete(Donation._id)} class="text-gray-900 bg-red-500 hover:bg-red-500/90 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                                    <FaRegTrashAlt className='mr-1'></FaRegTrashAlt> Delete
                                                </button>
                                                <button type="button" onClick={() => handleDonationStatus(Donation._id, Donation.pause)} class="text-gray-900 bg-green-500 hover:bg-green-500/90 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                                    <FaAngleDoubleUp className='mr-1'></FaAngleDoubleUp > {Donation.adopted ? 'Unpaused' : 'Paused'}
                                                </button>

                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                }


                            </Table.Body>
                        </Table>
                    </div>
            }


        </div>
    );
};

export default AllDonations;