import React from 'react';
import profileImg from '../../../assets/img1.jpg'
import useAuth from '../../../hooks/useAuth';
const Profile = () => {
    const {user, isAdmin} = useAuth()
    console.log(user, isAdmin);
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

                </div>
            </div>
        </div>
    );
};

export default Profile;