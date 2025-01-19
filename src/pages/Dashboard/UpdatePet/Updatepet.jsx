import React, { useState } from 'react';
import Select from 'react-select';
import { useFormik } from 'formik';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`

const Updatepet = () => {
    const loaderdata = useLoaderData()
    const { _id, image, name, age, category, location, note_owner, description } = loaderdata[0]
    const { user } = useAuth()
    const [selectedOption, setSelectedOption] = useState(category);
    const [value, setValue] = useState(description);
    const [error, setError] = useState({})
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const formik = useFormik({
        initialValues: {
            file: image,
            name: name,
            age: age,
            location: location,
            owner: note_owner,
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleAddpetForm = async (e) => {
        e.preventDefault()
        
        const { file, name, age, location, owner } = formik.values;
        if (!file) {
            setError({ image: "Upload pet image" })
            return
        }
        if (!name) {
            setError({ name: "Enter your pet's name" })
            return
        }
        if (!age) {
            setError({ age: "Enter your pet's age" })
            return
        }
        if (!selectedOption.value) {
            setError({ category: "Select pet category" })
            return
        }
        if (!location) {
            setError({ location: "Enter your pet's location" })
            return
        }
        if (!owner) {
            setError({ owner: "Share a special note or message about your pet" })
            return
        }
        if (!value) {
            setError({ description: "Enter pet details" })
            return
        }
        else {
            setError({})
        }
        // console.log(file);
        setLoading(true)
        // if()

        const { data } = await axios.post(image_hosting_api, { image: file },
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )
        if (data.success) {
            const addData = {
                id: _id,
                image: data.data.display_url,
                name: name,
                age: age,
                category: selectedOption.value ? selectedOption.value : category ,
                location: location,
                note_owner: owner,
                description: value,
            }
            console.log(selectedOption.value);
            const res = await axiosSecure.patch('/update-pet', addData)
            console.log(res.data);
            if (res.data.acknowledged || res.data.modifiedCount > 0) {
                toast.success("Successfully updated.")
                navigate('/dashboard/my-added-pet')
            }
        }
        else {
            toast.error("Something wrong")
            setLoading(false)
        }
    }
    const index = (options.findIndex(opton => opton.value === selectedOption))
  

    return (
        <div >
            <h1 className='text-4xl text-center dark:text-white'>Update a pet</h1>
            <div>


                <section class="bg-white dark:bg-gray-900">
                    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                        <form onSubmit={handleAddpetForm}>
                            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 text-start">
                                <div class="sm:col-span-2">
                                    <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pet Image</label>
                                    <input name='file' onChange={(event) => {
                                        formik.setFieldValue("file", event.currentTarget.files[0]);
                                    }} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="image" type="file" />
                                    {
                                        <img className='w-20' src={image} alt="" />
                                    }
                                    {
                                        error?.image && <p className='text-red-500'>{error.image}</p>
                                    }
                                </div>
                                <div class="w-full">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pet name</label>
                                    <input type="text" defaultValue={name} name="name" id="name" onChange={formik.handleChange} value={formik.values.name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your pet's name" required="" />
                                    {
                                        error?.name && <p className='text-red-500'>{error.name}</p>
                                    }
                                </div>
                                <div class="w-full">
                                    <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pet age</label>
                                    <input type="number" name="age" id="age" onChange={formik.handleChange} value={formik.values.age} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your pet's age" required="" />
                                    {
                                        error?.age && <p className='text-red-500'>{error.age}</p>
                                    }
                                </div>
                                <div>
                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                     

                                    />
                                    {
                                        error?.category && <p className='text-red-500'>{error.category}</p>
                                    }


                                </div>
                                <div>
                                    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pet location</label>
                                    <input type="text" name="location" id="location" onChange={formik.handleChange} value={formik.values.location} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your pet's location" required="" />
                                    {
                                        error?.location && <p className='text-red-500'>{error.location}</p>
                                    }
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note from the Owner</label>
                                    <input type="text" name="owner" id="owner" onChange={formik.handleChange} value={formik.values.owner} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Share a special note or a message about your pet (e.g., 'Buddy loves meeting new friends!')" required="" />
                                    {
                                        error?.owner && <p className='text-red-500'>{error.owner}</p>
                                    }
                                </div>
                                <div class="sm:col-span-2 ">
                                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Detailed Information About the Pet</label>

                                    <ReactQuill className='h-60 border-b-2 overflow-hidden dark:text-white' theme="snow" value={value} onChange={setValue} />
                                    {
                                        error?.description && <p className='text-red-500'>{error.description}</p>
                                    }
                                </div>
                            </div>
                            {
                                loading ? <button disabled type="button" class="py-2.5 mt-5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                    </svg>
                                    Loading...
                                </button> :
                                    <button class=" inline-flex mt-5 items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span class="relative   px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                           Update Adoption Info
                                        </span>
                                    </button>
                            }
                        </form>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Updatepet;