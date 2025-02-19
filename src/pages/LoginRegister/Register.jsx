import React, { useState } from 'react';
import image from '../../assets/register.json'
import Lottie from 'lottie-react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`
const Register = () => {
    const [error, setError] = useState('')
    const axiosPublic = useAxiosPublic()
    const [loading, setLoading] = useState(null)
    const { user,
        setUser,
        createUser,
        updateUserProfile,
        googleAuth,gitHubAuth } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleRegisterForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.files[0]
        const password = form.password.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (name.length < 5) {
            setError({ name: "Name can't 5 character less." })

            setLoading(false)
            return
        }
        if (!email) {
            setError({ email: 'Provide Email Address' })
            setLoading(false)

            return
        }

        if (!photo) {
            setError({ photo: 'Upload image' })
            setLoading(false)

            return
        }


        if (!passwordRegex.test(password)) {
            setError({ password: "Password must meet one Uppercase, lowercase letter and at least 6 chanacters long." })
            setLoading(false)

            return
        }

        const { data } = await axios.post(image_hosting_api, { image: photo },
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        )
        if (data.success) {
           

            createUser(email, password)
                .then(result => {
                    const user = result.user;
                   axiosPublic.post('/add-user', {name: name, email: user.email, photoURL: data.data.display_url, role: 'user'})
                   .then(res => {
                   })
                   

                    setUser(user)
                    updateUserProfile({ displayName: name, photoURL: data.data.display_url })
                        .then(() => {

                            toast.success('Successfully Registered.')
                            setLoading(false)
                            navigate(location.state ? location.state : '/')
                        })
                        .catch((err) => {
                            const error = err.message;
                            setError({ error })
                        })
                })
                .catch((error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        toast.error("User already exit.")
                        setLoading(false)
                        navigate('/register')
                    }
                    else {
                        const err = error.message;
                        setError({ error: err })

                    }
                });

        }
    }

    const handleGoogle = () => {
        googleAuth()
        .then(res => {setUser(res.user)
            toast.success("Successfully register.")

            axiosPublic.post(`/add-user`, {name: res.user.displayName, email: res.user.email, photoURL: res.user.photoURL, role: 'user'})
            .then(response =>{
                
            })
            navigate(location?.state ? location.state : '/')
        })
        .catch(err => {

        })
    }

    const handleGitHub = () =>{
        gitHubAuth()
            .then(res =>{
                setUser(res.user)
            toast.success("Successfully login")
            axiosPublic.post(`/add-user`, {name: res.user.displayName, email: res.user.email, photoURL: res.user.photoURL, role: 'user'})
            .then(response =>{
                
            })
            navigate(location?.state? location?.state : '/')
        })
    }

    return (
        <div className='pt-20'>
        <div className='md:flex items-center justify-center'>

            {/* image section */}
            <div className='md:block hidden'>
                <Lottie animationData={image} loop={true} />
            </div>

            <section className=" dark:bg-gray-900 w-full ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <div className='flex items-center'>
                                <button type="button" onClick={handleGoogle} className="text-gray-900 w-full text-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 justify-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                    <FcGoogle className='mr-1 text-xl' />  Log in with Google
                                </button>
                                <button type="button" onClick={handleGitHub} className="text-gray-900 w-full text-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 justify-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                    <FaGithub className='mr-1 text-xl' />   Log in with GitHub
                                </button>
                            </div>
                            <div class="relative flex items-center my-4">
                                <div class="flex-grow border-t dark:border-gray-700"></div>
                                <span class="px-4 text-gray-500 text-sm">OR</span>
                                <div class="flex-grow border-t dark:border-gray-700"></div>
                            </div>
                            <form onSubmit={handleRegisterForm} className="space-y-4 text-start md:space-y-6" action="#">
                                <div>
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your full name" required="" />
                                    {error?.name && <p className='text-red-600'>{error.name}</p>}
                                </div>
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    {error?.email && <p className='text-red-600'>{error.email}</p>}
                                </div>
                                <div>
                                    <label for="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Image</label>
                                    <input name='photo' class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                                    {error?.photo && <p className='text-red-600'>{error.photo}</p>}

                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    {error?.password && <p className='text-red-600'>{error.password}</p>}

                                </div>
                                {/* <div>
                                <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div> */}

                                {
                                    loading ?
                                        <button disabled type="button" class="py-2.5 w-full  px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                            </svg>

                                        </button> :
                                        <button type="submit" className="text-gray-900 w-full text-center bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 justify-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                            Register
                                        </button>
                                }
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        </div>
    );
};

export default Register;