import React from 'react';
import { Table, Button } from "flowbite-react";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../../components/Utlies/Loading';
import Swal from 'sweetalert2';

const AdoptionRequest = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { refetch, isLoading, data: adoption = [] } = useQuery({
        queryKey: ['adoptions'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/adoption-request?email=${user.email}`)
            console.log(res.data);
            return res.data;
        }
    })

    const handleAcceptAdoptionRequest = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, accept it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const updateData = {
                    id: id,
                    adopted : true
                  }
                  axiosSecure.patch(`/update-pet`, updateData)
                  .then(res =>{
                    console.log(res.data);
                    refetch() 
                    Swal.fire({
                    title: "Accepted!",
                    text: "Successfully accept adoption request.",
                    icon: "success"
                });
                  })
               


            }
        });
    }

    const handleRejectAdoptionRequest = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, reject it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/reject-adoption-request/${id}`)
                .then(res =>{
                    console.log(res);   
                    refetch()
                   Swal.fire({
                    title: "Accepted!",
                    text: "Successfully reject adoption request.",
                    icon: "success"
                });  
                })
               


            }
        });
    }


    return (
        <div className="overflow-x-auto">
            {
                isLoading ? <Loading /> :
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>User name</Table.HeadCell>
                            <Table.HeadCell>Email</Table.HeadCell>
                            <Table.HeadCell>Phone number</Table.HeadCell>
                            <Table.HeadCell>Location</Table.HeadCell>
                            <Table.HeadCell>
                                Action
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                adoption.map(adopt =>
                                    adopt.map(adop =>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {adop.userName}
                                            </Table.Cell>
                                            <Table.Cell>{adop.email}</Table.Cell>
                                            <Table.Cell>{adop.phoneNumber}</Table.Cell>
                                            <Table.Cell>{adop.address}</Table.Cell>
                                            <Table.Cell>
                                                <Button.Group outline className=''>
                                                    <Button onClick={()=>handleAcceptAdoptionRequest(adop.petId)} gradientMonochrome="success">Accept</Button>

                                                    <Button onClick={()=> handleRejectAdoptionRequest(adop._id)} gradientMonochrome="failure">Reject</Button>
                                                </Button.Group>
                                            </Table.Cell>
                                        </Table.Row>
                                    )

                                )
                            }


                        </Table.Body>
                    </Table>
            }
        </div>
    );
};

export default AdoptionRequest;