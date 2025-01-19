import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../../components/Utlies/Loading';
import { Table } from "flowbite-react";
import Swal from 'sweetalert2'

const Users = () => {
  const axiosSecure = useAxiosSecure()
  const { refetch, data: users = [], isLoading } = useQuery({
    queryKey: ['users',],
    queryFn: async () => {
      const res = await axiosSecure.get('/allusers')
      return res.data
    }
  })

  const handleAdminAdd = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch('/user-role-update', {id:id})
        .then(res => {
          console.log(res.data);
          refetch()
        })
        Swal.fire({
          title: "Updated",
          text: "User role updated",
          icon: "success"
        });
      }
    });
  }

  return (
    <div>
      {
        isLoading ? <Loading></Loading> :
          <div className="overflow-x-auto">
            <div className='dark:text-white text-2xl font-bold my-2'><h1>Total users {users.length}</h1></div>
            <Table striped>
              <Table.Head>
                <Table.HeadCell>User name</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Profile picture</Table.HeadCell>
                <Table.HeadCell>Make admin</Table.HeadCell>
                <Table.HeadCell>
                  Banned a user account
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {
                  users.map(user => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {user.name}
                    </Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell> <img className='w-10' src={user.photoURL} alt="" />
                    </Table.Cell>
                    <Table.Cell>
                      {user.role === 'admin' ? 
                      <button   class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        {user.role}
                      </span>
                    </button>:
                    <button  onClick={()=>handleAdminAdd(user._id)} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      {user.role}
                    </span>
                  </button>
                      }
                      </Table.Cell>
                    <Table.Cell>
                      <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                        Banned
                      </a>
                    </Table.Cell>
                  </Table.Row>
                  )}
              </Table.Body>
            </Table>
          </div>
      }
    </div>
  );
};

export default Users;