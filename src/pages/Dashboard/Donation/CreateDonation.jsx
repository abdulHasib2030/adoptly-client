import React, { useState } from 'react';
import Select from 'react-select';
import { useFormik } from 'formik';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`
const CreateDonation = () => {
    const { user } = useAuth()
    const [selectedOption, setSelectedOption] = useState(null);
    const [value, setValue] = useState('');
    const [error, setError] = useState({})
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)




    const formik = useFormik({
        initialValues: {
            file: '',
            name: '',
            donation: '',
            date: '',
            shortDescription: '',
            
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleAddpetForm = async (e) => {
        e.preventDefault()
        console.log(formik.values);
        const { file, name, donation, date, shortDescription } = formik.values;
        if (!file) {
            setError({ image: "Pet picture is required" })
            return
        }
        if(!name){
            setError({ name: "Pet name is required" })
            return
        }
        if (!donation) {
            setError({ donation: "Maximum donation amount is required" })
            return
        }
        if (!date) {
            setError({ date: "Last date of donation is required" })
            return
        }
        // if(date < new Date().getDate())
        if (!shortDescription) {
            setError({ shortDescription: "Short description is required" })
            return
        }
      
       
        if (!value) {
            setError({ description: "Enter pet details" })
            return
        }
        else {
            setError({})
        }
    
         setLoading(true)
        const { data } = await axios.post(image_hosting_api, { image: file },
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )
        if (data.success) {
            const addData = {
                image: data.data.display_url,
                name: name,
                donation: donation,
                lst_date: date,
                shortDescription: shortDescription,
                description: value,
                date: new Date(),
                user: user.email,
                pause: false,
                collectDonation: 0
            }
            const res = await axiosSecure.post(`/add-donation?email=${user.email}`, addData); // Send POST request
            if (res.data.acknowledged && res.data.insertedId) {
                toast.success("Successfully added Donation Campaign")
                setLoading(false)
                navigate('/dashboard/my-added-donation')
            }
        }
        else {
            toast.error("Something wrong")
            setLoading(false)
        }

    }
    //  console.log(new Date().);


    return (
        <div >
            <h1 className='text-4xl text-center dark:text-white'>Create Donation campaign</h1>
            <div>


                <section class="bg-white dark:bg-gray-900">
                    <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                        <form onSubmit={handleAddpetForm}>
                            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 text-start">
                                <div class="sm:col-span-2">
                                    <label for="image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pet Image</label>
                                    <input name='file' onChange={(event) => {
                                        formik.setFieldValue("file", event.currentTarget.files[0]); // Update Formik's file field with the selected file
                                    }} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="image" type="file" />
                                    {
                                        error?.image && <p className='text-red-500'>{error.image}</p>
                                    }
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pet name</label>
                                    <input type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter pet's name"  required="" />
                                    {
                                        error?.name && <p className='text-red-500'>{error.name}</p>
                                    }
                                </div>
                                <div class="w-full">
                                    <label for="donation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Maximum Donation Amount</label>
                                    <input type="number" name="donation" id="donation" onChange={formik.handleChange} value={formik.values.donation} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter donation amount" required="" />
                                    {
                                        error?.donation && <p className='text-red-500'>{error.donation}</p>
                                    }
                                </div>
                                <div class="w-full">
                                    <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Date of Donation</label>
                                    <input type="date" name="date" id="date" onChange={formik.handleChange} value={formik.values.date} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                    {
                                        error?.date && <p className='text-red-500'>{error.date}</p>
                                    }
                                </div>
                              
                                <div class="sm:col-span-2">
                                    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description</label>
                                    <input type="text" name="shortDescription" id="shortDescription" onChange={formik.handleChange} value={formik.values.shortDescription} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required="" />
                                    {
                                        error?.shortDescription && <p className='text-red-500'>{error.shortDescription}</p>
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
                                            Submit Donation Info
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

export default CreateDonation;