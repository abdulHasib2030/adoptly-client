import React, { useState } from 'react';
import Navbar from '../../components/NavFooter/Navbar';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { RiMenu4Fill } from "react-icons/ri";
import { IoAdd, IoExpandOutline } from 'react-icons/io5';
import { IoMdMenu, IoMdWatch } from 'react-icons/io';
import Addpet from './Addpet/Addpet';

import useAuth from '../../hooks/useAuth';
import { CgUserAdd } from 'react-icons/cg';
const Dashboard = () => {
   const [sidebar, setSidebar] = useState(true)
   const {isAdmin} = useAuth()
   const handleSidebar = () => {
      sidebar ? setSidebar(false) : setSidebar(true)
   }

   const ulItem = <ul class="space-y-2 font-medium">
      {
         isAdmin &&
      <>
       <li>
         <Link to={'users'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <CgUserAdd className='text-2xl'/>
            <span class="ms-3">All users</span>
         </Link>
      </li>
      <li>
         <Link to={'pets'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
         
            <span class="ms-3">All pets</span>
         </Link>
      </li>
      <li>
         <Link to={'donations'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <IoAdd></IoAdd>
            <span class="ms-3">All Donations</span>
         </Link>
      </li>
      </>
      }
      <li>
         <Link to={'addpet'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <IoAdd></IoAdd>
            <span class="ms-3">Add a pet</span>
         </Link>
      </li>
      <li>
         <Link to={'my-added-pet'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <IoMdMenu></IoMdMenu>
            <span class="ms-3">My added pet</span>
         </Link>
      </li>
      <li>
         <Link to={'adoption-request'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <IoExpandOutline />
            <span class="ms-3">Adoption Request</span>
         </Link>
      </li>
      <li>
         <Link to={'create-donation'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <IoExpandOutline />
            <span class="ms-3">Create Donation Campaign</span>
         </Link>
      </li>
      <li>
         <Link to={'my-added-donation'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <IoExpandOutline />
            <span class="ms-3">My Donation Campaigns</span>
         </Link>
      </li>
      <li>
         <Link to={'my-donation'} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <IoExpandOutline />
            <span class="ms-3">My Donations</span>
         </Link>
      </li>


   </ul>

   return (
      <div>
         <Navbar></Navbar>


         <div className='mt-16'>

            <div className='dark:text-white md:hidden'>
               <svg onClick={handleSidebar} class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
               </svg>
            </div>

            <aside id="cta-button-sidebar" class="fixed top-[85px] left-0 z-40 w-72 h-screen transition-transform -translate-x-full md:translate-x-0" aria-label="Sidebar">
               <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                  {
                     ulItem}

               </div>
            </aside>
            {/* mobile device */}
            <aside id="cta-button-sidebar" class={`fixed top-[85px] left-0 z-40 w-72 h-screen transition-transform ${sidebar && 'hidden'}  `} aria-label="Sidebar">
               <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                  {ulItem}

               </div>
            </aside>



            <div onClick={()=> !sidebar && setSidebar(true)} class="p-4 md:ml-64">

               <div class="p-4 border-2 border-gray-200 min-h-screen rounded-lg dark:border-gray-700">
                 <Outlet />
               </div>
            </div>

         </div>


      </div>
   );
};

export default Dashboard;