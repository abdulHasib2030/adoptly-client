import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Table, Button } from "flowbite-react";
import { FaAngleDoubleUp, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import Loading from '../../../components/Utlies/Loading';

const Allpets = () => {
    const axiosSecure = useAxiosSecure()

    const { refetch, data: pets = [], isLoading } = useQuery({
        queryKey: ['pets'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allpets')
            return res.data
        }
    })

    const handlePetDelete = (id) =>{
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
                axiosSecure.delete(`/pet-delete/${id}`)
                .then(res =>{
                  Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });   
              refetch()
                })
             
            }
          });
    }

    const handlePetAdoptedStatus = (id, status) =>{
        axiosSecure.patch(`/update-pet-status/`, {id:id, status: status})
        .then(res =>{
            toast.success("Pet status updated successfully.")
            refetch()
        })
    }
    return (
        <div>
            {
                isLoading ? <Loading></Loading> :
            <div className="overflow-x-auto">
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>pet name</Table.HeadCell>
                        <Table.HeadCell>pet image</Table.HeadCell>
                        <Table.HeadCell>age</Table.HeadCell>
                        <Table.HeadCell>category</Table.HeadCell>
                        <Table.HeadCell>
                            location
                        </Table.HeadCell>
                        <Table.HeadCell>
                            note owner
                        </Table.HeadCell>
                        {/* <Table.HeadCell>
                            description
                        </Table.HeadCell> */}
                        <Table.HeadCell>
                            date
                        </Table.HeadCell>
                        <Table.HeadCell>
                            adopted
                        </Table.HeadCell>
                        <Table.HeadCell>
                            user
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Actions
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            pets.map(pet =>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {pet.name}
                                    </Table.Cell>
                                    <Table.Cell> <img src={pet.image} className='w-10' alt="" /> </Table.Cell>
                                    <Table.Cell>{pet.age}</Table.Cell>
                                    <Table.Cell>{pet.category}</Table.Cell>
                                    <Table.Cell>{pet.location}</Table.Cell>
                                    <Table.Cell>{pet.note_owner}</Table.Cell>
                                    {/* <Table.Cell>{pet.description}</Table.Cell> */}
                                    <Table.Cell>{pet.date}</Table.Cell>
                                    <Table.Cell>{pet.adopted ? "True" : "False"}</Table.Cell>
                                    <Table.Cell>{pet.user}</Table.Cell>
                                    <Table.Cell>   <Button.Group outline>
                                        <Link to={`/dashboard/update-pet/${pet._id}`}>
                                        <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
                                            <FaRegEdit className='mr-1'></FaRegEdit> Edit
                                        </button></Link>
                                        <button type="button" onClick={()=>handlePetDelete(pet._id)} class="text-gray-900 bg-red-500 hover:bg-red-500/90 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                            <FaRegTrashAlt className='mr-1'></FaRegTrashAlt> Delete
                                        </button>
                                        <button type="button" onClick={()=>handlePetAdoptedStatus(pet._id, pet.adopted)} class="text-gray-900 bg-green-500 hover:bg-green-500/90 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2">
                                            <FaAngleDoubleUp className='mr-1'></FaAngleDoubleUp > {pet.adopted? 'Not adopted':'Adopted'}
                                        </button>


                                    </Button.Group></Table.Cell>
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

export default Allpets;