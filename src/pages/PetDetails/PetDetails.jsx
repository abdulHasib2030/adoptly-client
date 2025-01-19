import React, { useState } from 'react';
import image from '../../assets/banner2.jpg'
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Utlies/Loading';
import { Button, Modal } from "flowbite-react";
import { Label, TextInput } from "flowbite-react";
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const PetDetails = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [openModal, setOpenModal] = useState(false);
    const location = useLocation()
    const [selectedPet, setSelectedPet] = useState(null);
    const path = location.pathname.split('/')[2]
    console.log(path);
    const { refetch, data: pet, isLoading } = useQuery({
        queryKey: ['pet'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/pet/${path}`)
            return res.data;
        }
    })
    let description = ""
    isLoading ? description : description = pet[0].description;

    const handleAdoptBtn = (pet) => {
        setSelectedPet(pet)
        setOpenModal(true)
    }

    const handleAdoptForm = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const adoptionData = {
            petId: selectedPet[0]._id,
            petName: selectedPet[0].name,
            petImage: selectedPet[0].image,
            userName: user.displayName,
            email: user.email,
            phoneNumber: formData.get("phone"),
            address: formData.get("address"),
        };
        console.log(adoptionData);
       const res = await axiosSecure.post('/adopt', adoptionData)
       if(res.data.acknowledged && res.data.insertedId){
        toast.success("Successfully adopt request.")
        setOpenModal(false)
       }
        
    }

    return (

        <div className='mt-16'>
            {
                isLoading ? <Loading></Loading> :
                    <div>
                        <div className='h-96 w-full mx-auto border-2'>
                            <img src={pet[0].image} className='h-full w-full' alt="" />
                        </div>

                        <div className='mt-5 grid md:grid-cols-12 gap-4'>
                            <div className="w-full  md:col-span-8 space-y-2 p-4 text-start bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Name of pet <span className='font-semibold'>{pet[0].name}</span></h5>
                                <div>
                                    <ul className='list-disc text-start grid grid-cols-2 gap-3'>
                                        <li>Age: {pet[0].age}</li>
                                        <li>Category: {pet[0].catgory}</li>
                                        <li>Location: {pet[0].location}</li>
                                        <li>Added date: {pet[0].date}</li>
                                        <li>Adopted: <span className=''>{pet[0].adopted ? "True" : "False"}</span></li>
                                        <li>User: {pet[0].user}</li>
                                    </ul>
                                    <p className='text-start mt-2 font-bold'>Owner note: <span className='font-normal'>{pet[0].note_owner}</span></p>
                                    <p className='font-bold'>Description:</p>
                                    <div dangerouslySetInnerHTML={{ __html: description }} />
                                </div>
                            </div>

                            <div className='md:col-span-4'>
                                <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <img src="https://img.icons8.com/?size=100&id=eGMiZMLt3CD6&format=png&color=000000" alt="" className='w-20 mx-auto mb-2' />
                                    <button onClick={() => handleAdoptBtn(pet)} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Adopted
                                        </span>
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
            }


            {/* modal */}
            {
                selectedPet &&
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Adopt {selectedPet[0].name}</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <form onSubmit={handleAdoptForm}>
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="userName" value="Your Name" />
                                        <TextInput
                                            id="userName"
                                            value={user.displayName}
                                            disabled
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email" value="Your Email" />
                                        <TextInput
                                            id="email"
                                            value={user.email}
                                            disabled
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone" value="Phone Number*" />
                                        <TextInput
                                            id="phone"
                                            name="phone"
                                            type="number"
                                            placeholder="Enter your phone number"
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="address" value="Address*" />
                                        <TextInput
                                            id="address"
                                            name="address"
                                            placeholder="Enter your address"
                                            defaultValue={user.address}
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-end">
                                    <Button type="submit">Submit</Button>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                            Decline
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </div>
    );
};

export default PetDetails;