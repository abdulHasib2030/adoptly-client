import Swal from 'sweetalert2'
import useMyPet from '../../../hooks/useMyPet';
import React, { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table';
import Loading from '../../../components/Utlies/Loading';
import { Navigate, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';


function MyAddedPet() {

  const [sorting, setSorting] = useState([]);
  const axiosSecure = useAxiosSecure()
  const [pets, refetch, isLoading] = useMyPet()
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });


  const navigate = useNavigate()
  const handleUpdate = (value) => {
    navigate(`/dashboard/update-pet/${value._id}`)
  }

  const handleDelete = (value) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-pet/${value._id}`)
          .then(res => {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          })

      }
    });
  }

  const handleAdopt = (value) => {
    const updateData = {
      id: value._id,
      adopted: true
    }
    axiosSecure.patch(`/update-pet`, updateData)
      .then(res => {
        refetch()
      })
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'serialNumber',
        header: 'Serial Number',
        cell: (info) => {
          const rowIndex = info.table.getRowModel().rows.findIndex(
            (row) => row.id === info.row.id
          );
          return <span>{rowIndex + 1}</span>; // Display 1-based index
        },
      },
      {
        accessorKey: 'name',
        header: 'Pet Name',
      },
      {
        accessorKey: 'category',
        header: 'Pet Category',
      },
      {
        accessorKey: 'image',
        header: 'Pet Image',
        cell: info => (
          <img src={info.getValue()} alt="Pet" className="w-12 h-12 object-cover rounded" />
        ),
      },
      {
        accessorKey: 'isAdopted',
        header: 'Adoption Status',
        cell: ({ row }) => (
          <span
            className={`px-2 py-1 rounded text-white ${row.original.adopted ? 'bg-green-500' : 'bg-red-500'
              }`}
          >
            {row.original.adopted ? 'Adopted' : 'Not Adopted'}
          </span>
        ),
      },
      {
        accessorKey: 'id',
        header: 'Actions',
        cell: ({ row }) => (
          <div className="flex space-x-2">
            <button
              onClick={() => handleUpdate(row.original)}
              className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(row.original)}
              className="text-gray-900 bg-red-500 hover:bg-red-500/90 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
            >
              Delete
            </button>
            <button
              onClick={() => handleAdopt(row.original)}
              className="text-gray-900 bg-green-500 hover:bg-green-500/90 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
            >
              Mark as Adopted
            </button>
          </div>
        ),
      },
    ],
    []
  );





  const table = useReactTable({
    data: pets,
    columns,
    state: {
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  // Render the UI for your table
  return (
    <>
      {
        isLoading ?
          <Loading></Loading> :
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Helmet>
              <title>My added pets</title>
            </Helmet>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                {table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className="px-6 py-3 cursor-pointer"
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted()] ?? null}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-600">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-4">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
                {

                }
              </tbody>
            </table>
            {/* Pagination Controls */}
            {
              pets.length > 10 &&
              <div className="flex justify-between items-center py-3">
                <button
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Previous
                </button>
                <span className='dark:text-white'>
                  Page{' '}
                  <strong className='dark:text-white'>
                    {table.getState().pagination.pageIndex + 1} of{' '}
                    {table.getPageCount()}
                  </strong>
                </span>
                <button
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            }
          </div>

      }

    </>
  );

}

export default MyAddedPet;