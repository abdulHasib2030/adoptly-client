import React, { useState } from 'react';
import profileImg from '../../../assets/img1.jpg'
import useAuth from '../../../hooks/useAuth';

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

const Profile = () => {
    const {user, isAdmin} = useAuth()
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
      }
    
      const handleForm = (e) =>{
        e.preventDefault()

      }

    return (
        <div className='dark:text-white'>
            <div >
                <h1 className='text-3xl font-bold '>Profile Information</h1>
                <div className='border my-4 dark:border-gray-600'></div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-5'>
                    <img src={user.photoURL} alt="" className='w-40 h-40 rounded-full' />
                    <div>
                    <h5 className='text-xl font-bold'>Profile picture</h5>
                    <p>PNG, JPEG, JPG under 5MB</p>
                    </div>
                    </div>
                    {/* <div >
                    <button className='border rounded-xl p-2 mr-5 dark:border-gray-600'>Upload new picture</button>
                    <button className='bg-gray-300 text-black rounded-xl p-2 '>Delete</button>

                    </div> */}
                </div>
                <div className='mt-9 space-y-3'>
                    <h1 className='text-xl font-bold'>Full name</h1>
                    <p className='border dark:border-gray-600 p-2 rounded-xl '>{user.displayName}</p>
                    <h1 className='text-xl font-bold'>Email</h1>
                    <p className='border dark:border-gray-600 p-2 rounded-xl '>{user.email}</p>
                    <h1 className='text-xl font-bold'>User role</h1>
                    <p className='border dark:border-gray-600 p-2 rounded-xl '>{isAdmin ? "Admin" : "User"}</p>
                    {/* <h1 className='text-xl font-bold'>Phone number</h1>
                    <p className='border dark:border-gray-600 p-2 rounded-xl '>01425777</p>
                    <h1 className='text-xl font-bold'>Address</h1>
                    <p className='border dark:border-gray-600 p-2 rounded-xl '>Address</p>
                    <button onClick={()=> setOpenModal(true)} class=" inline-flex mt-9 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span class="relative   px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                           Update Profile Info
                                        </span>
                                    </button> */}
                </div>
            </div>
            
            {/* Modal */}
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Update profile info</h3>
            <form onSubmit={handleForm}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your name" />
              </div>
              <TextInput
                id="name"
                placeholder="Name"
                value={user?.displayName}
               name='name'
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your number" />
              </div>
              <TextInput
                id="number"
                placeholder="Number"
                value={user?.number ? user.number : ""}
                name='number'
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="address"
                placeholder="Address"
                value={user?.number ? user.number : ""}
                name='address'
                required
              />
            </div>
            
         
            <div className="w-full">
            <button type='submit' class=" inline-flex mt-2 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span class="relative   px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                           Update Now
                                        </span>
                                    </button>
            </div>

            </form>
          
          </div>
        </Modal.Body>
      </Modal>

        </div>
    );
};

export default Profile;