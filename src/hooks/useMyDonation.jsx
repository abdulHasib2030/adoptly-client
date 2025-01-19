import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useMyDonation = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {refetch, data:donation=[], isLoading} = useQuery({
        queryKey: ['donation', user?.email],
        queryFn: async()=> {
            const res = await axiosSecure.get(`/donation?email=${user.email}`)
           return res.data
        }
    })
    return [refetch, donation, isLoading]
};

export default useMyDonation;