import React from 'react';

const MyDonation = () => {
    return (
        <div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Pet Image</th>
                            <th scope="col" className="px-6 py-3">Pet Name</th>
                            <th scope="col" className="px-6 py-3">Donated Amount</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">
                                <img src="https://via.placeholder.com/50" alt="Pet Image" className="w-12 h-12 rounded-full" />
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                Bella
                            </td>
                            <td className="px-6 py-4">
                                $50.00
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800">
                                    Ask for Refund
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyDonation;