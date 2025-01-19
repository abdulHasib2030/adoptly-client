import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useAllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    
    const {data: allusers = [], refetch, isLoading} = useQuery({
        queryKey: ['allusers', ],
        queryFn: async()=>{
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    return [allusers, refetch, isLoading]
};

export default useAllUsers;