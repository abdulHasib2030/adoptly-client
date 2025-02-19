import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [dropdownBtn, setDropdownBtn] = useState(true)
    const [themeicon, setThemeIcon] = useState(localStorage.getItem('theme') === 'dark' ? true : false)
    const { user, logoutUser } = useAuth()
    const [dropdownAvater, setDropdownAvater] = useState(true)
    const navigate = useNavigate()

    const location = useLocation()
    const [navColorActive, setNavColorActive] = useState(location.pathname)


    const handleLogout = () =>{
        logoutUser()
        
    }

    const toggleDarkMode = () => {
        const htmlElement = document.documentElement;
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setThemeIcon(false)
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setThemeIcon(true)
        }
    };

    // Apply the saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');

    } else {
        document.documentElement.classList.remove('dark');

    }

    return (
        <div>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-12" alt="Logo" />

                    </Link>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {
                            themeicon ? <IoSunny onClick={toggleDarkMode} className='mr-3 text-2xl text-white cursor-pointer' /> :
                                <IoMdMoon onClick={toggleDarkMode} className='mr-3 text-2xl cursor-pointer ' />
                        }

                        {user ?
                            <div class="flex relative items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                <button type="button" onClick={()=> dropdownAvater ? setDropdownAvater(false) : setDropdownAvater(true)} class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                    <span class="sr-only">Open user menu</span>
                                    <img class="w-8 h-8 rounded-full" src={user?.photoURL} alt="user photo" />
                                </button>

                                <div class={`z-50 ${dropdownAvater && 'hidden'} right-3 top-5 absolute my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
                                    <div class="px-4 py-3">
                                        <span class="block text-sm text-gray-900 dark:text-white">{user?.displayName}</span>
                                        <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                                    </div>
                                    <ul class="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                            <Link to={'/'} className="block px-4 md:hidden py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
                                        </li>

                                        <li>
                                            <Link to={'/pet-list'} className="block px-4 md:hidden py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Pet Listing </Link>
                                        </li>
                                        <li>
                                            <Link to={'/donation-campain'} className="block md:hidden px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Donation Campaigns</Link>
                                        </li>
                                        <li>
                                            <Link to={'/about'} className="block md:hidden px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">About</Link>
                                        </li>
                                        <li>
                                            <Link to={'/contact'} className="block md:hidden px-4 py-2 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to={'/dashboard'} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                                        </li>
                                      
                                        <li >
                                            <button onClick={handleLogout}  class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                            :

                            <div className='md:block hidden'>
                                <NavLink to={'/login'}> <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                    Login
                                </button></NavLink>
                                <NavLink to={'/register'}>
                                    <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                        Register
                                    </button></NavLink>
                            </div>}
                        {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}
                       { !user &&    <div className='dropdown md:hidden'>
                            <CgMenuRightAlt onClick={() => setDropdownBtn(false)}
                                className={`text-3xl ${!dropdownBtn && 'hidden'} ${themeicon && 'text-white'}`} />
                            <div className={`${dropdownBtn && 'hidden'} relative z-50  `}>
                                <svg onClick={() => setDropdownBtn(true)}
                                    className={`swap-on fill-current ${themeicon && 'text-white'} `}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 512 512">
                                    <polygon
                                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />


                                </svg>
                                <div className='w-48 bg-white rounded-lg shadow dark:bg-gray-700 absolute right-1  top-12'>
                                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                                        <li>
                                            <Link to={'/'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
                                        </li>

                                        <li>
                                            <Link to={'/pet-list'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Pet Listing </Link>
                                        </li>
                                        <li>
                                            <Link to={'/donation-campain'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Donation Campaigns</Link>
                                        </li>
                                       

                                            <li>
                                                <NavLink to={'/login'}> <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                                    Login
                                                </button></NavLink>
                                                <NavLink to={'/register'}>
                                                    <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                                        Register
                                                    </button></NavLink>
                                            </li>
                                    </ul>
                                </div>
                            </div>
                        </div>}


                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li onClick={()=> setNavColorActive('/')}>
                                <Link to={'/'} className={`block py-2 px-3 dark:text-white  md:p-0 rounded ${navColorActive === '/' && 'bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'}`} aria-current="page">Home</Link>
                            </li>
                           
                            <li onClick={()=> setNavColorActive('/pet-list')}>
                                <Link to={'/pet-list'} className={`block py-2 ${navColorActive === '/pet-list' && 'bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'} px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Pet Listing</Link>
                            </li>
                            
                            <li onClick={()=> setNavColorActive('/donation-campain')}>
                                <Link to={'/donation-campain'} className={`block py-2 ${navColorActive === '/donation-campain' && 'bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'} px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Donation Campaigns</Link>
                            </li>
                            {
                                user && <>
                            <li onClick={()=> setNavColorActive('/about')}>
                                <Link to={'/about'} className={`block py-2 ${navColorActive === '/about' && 'bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'} px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>About</Link>
                            </li>
                            <li onClick={()=> setNavColorActive('/contact')}>
                                <Link to={'/contact'} className={`block py-2 ${navColorActive === '/contact' && 'bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'} px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Contact Us</Link>
                            </li>
                                
                                </>
                            }
                            {/* <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li> */}
                        </ul>
                    </div>

                    {/* <!-- Dropdown menu --> */}


                </div>
            </nav>

        </div>
    );
};

export default Navbar;