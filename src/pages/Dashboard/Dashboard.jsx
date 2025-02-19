import React, { useState } from 'react';
import Navbar from '../../components/NavFooter/Navbar';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { RiMenu4Fill } from "react-icons/ri";
import { IoAdd, IoExpandOutline } from 'react-icons/io5';
import { IoMdMenu, IoMdWatch } from 'react-icons/io';
import Addpet from './Addpet/Addpet';
import { FaPlus, FaList, FaPaw, FaDonate, FaRegEye, FaHeart,  FaHandHoldingUsd, FaUsers, FaHome, FaArrowAltCircleLeft } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";

import useAuth from '../../hooks/useAuth';
import { CgUserAdd } from 'react-icons/cg';

const Dashboard = () => {
   const [sidebar, setSidebar] = useState(true)
   const location = useLocation()
   const [sidebarActive, setSidebarActive] = useState(location.pathname.split('/').pop())
   const {isAdmin} = useAuth()
   const handleSidebar = () => {
      sidebar ? setSidebar(false) : setSidebar(true)
   }

   console.log(sidebarActive, sidebarActive === 'users');

   const ulItem = <ul class="space-y-2 font-medium">
      {
         isAdmin &&
      <>
       <li>
         <Link to={'users'} onClick={()=> setSidebarActive('users')} class={`flex ${sidebarActive === 'users' && 'bg-gray-200 dark:bg-gray-600'} items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
            <FaUsers className='text-2xl'/>
            <span class="ms-3">All users</span>
         </Link>
      </li>
      <li>
         <Link to={'pets'} onClick={()=> setSidebarActive('pets')}  class={`flex items-center  ${sidebarActive === 'pets' && 'bg-gray-200 dark:bg-gray-600'} p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
           <FaPaw />
            <span class="ms-3">All pets</span>
         </Link>
      </li>
      <li>
         <Link to={'donations'} onClick={()=> setSidebarActive('donations')} class={`flex items-center ${sidebarActive === 'donations' && 'bg-gray-200 dark:bg-gray-600'} p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
           <FaHandHoldingUsd />
            <span class="ms-3">All Donations</span>
         </Link>
      </li>
      </>
      }
      <div className='border'></div>
      <li>
         <Link to={'/dashboard'}  onClick={()=> setSidebarActive('dashboard')} class={`flex ${sidebarActive === 'dashboard' && 'dark:bg-gray-600 bg-gray-200'} items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
            <FaHome />
            <span class="ms-3">Dashboard Home</span>
         </Link>
      </li>
      <li>
         <Link to={'addpet'} onClick={()=> setSidebarActive('addpet')} class={`flex ${sidebarActive === 'addpet' && 'dark:bg-gray-600 bg-gray-200'} items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
            <FaPlus />
            <span class="ms-3">Add a pet</span>
         </Link>
      </li>
      <li>
         <Link to={'my-added-pet'} onClick={()=> setSidebarActive('my-added-pet')}  class={`flex items-center ${sidebarActive === 'my-added-pet' && 'dark:bg-gray-600 bg-gray-200'} p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
            <FaList />
            <span class="ms-3">My added pet</span>
         </Link>
      </li>
      <li>
         <Link to={'adoption-request'} onClick={()=> setSidebarActive('adoption-request')} class={`flex ${sidebarActive === 'adoption-request' && 'dark:bg-gray-600 bg-gray-200'} items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
            <FaPaw />
            <span class="ms-3">Adoption Request</span>
         </Link>
      </li>
      <li>
         <Link to={'create-donation'} onClick={()=> setSidebarActive('create-donation')}  class={`flex ${sidebarActive === 'create-donation' && 'dark:bg-gray-600 bg-gray-200'} items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
            <FaDonate />
            <span class="ms-3">Create Donation Campaign</span>
         </Link>
      </li>
      <li>
         <Link to={'my-added-donation'} onClick={()=> setSidebarActive('my-added-donation')} class={`flex ${sidebarActive === 'my-added-donation' && 'dark:bg-gray-600 bg-gray-200'} items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
            <FaRegEye />
            <span class="ms-3">My Donation Campaigns</span>
         </Link>
      </li>
      <li>
         <Link to={'my-donation'} onClick={()=> setSidebarActive('my-donation')} class={`flex ${sidebarActive === 'my-donation' && 'dark:bg-gray-600 bg-gray-200'} items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
            <FaHeart />
            <span class="ms-3">My Donations</span>
         </Link>
      </li>


   </ul>

   return (
      <div>
         <Navbar></Navbar>


         <div className='mt-20'>

            <div className='dark:text-white lg:hidden pt-2'>
               <svg onClick={handleSidebar} class="w-6 h-6 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
               </svg>
            </div>

            <aside id="cta-button-sidebar" class="fixed top-[85px] left-0 z-40 w-72 h-screen transition-transform -translate-x-full lg:translate-x-0" aria-label="Sidebar">
               <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                  {
                     ulItem}

               </div>
            </aside>
            {/* mobile device */}
            <aside id="cta-button-sidebar" class={`fixed top-[85px] left-0 z-40 w-72 h-screen transition-transform ${sidebar && 'hidden'}  `} aria-label="Sidebar">
               <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
               <IoIosArrowForward onClick={()=> !sidebar && setSidebar(true)} className='dark:text-white text-4xl absolute -right-5 top-1 cursor-pointer' />

                  {ulItem}

               </div>
            </aside>



            <div onClick={()=> !sidebar && setSidebar(true)} class="p-4 lg:ml-72">

               <div class="p-4 m-5 border-2 border-gray-200 min-h-screen rounded-lg dark:border-gray-700">
                 <Outlet />
               </div>
            </div>

         </div>


      </div>
   );
};

export default Dashboard;