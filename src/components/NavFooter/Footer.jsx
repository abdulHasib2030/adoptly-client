import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className=''>
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <Link to={'/'} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} className="h-8" alt="Flowbite Logo" />
                        </Link>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Add a pet</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Add Donation</a>
                            </li>
                            {/* <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li> */}
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to={'/'} className="hover:underline">Adoptly™</Link>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    );
};

export default Footer;