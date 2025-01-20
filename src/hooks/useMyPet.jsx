import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import {useQuery} from '@tanstack/react-query'

const useMyPet = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()

    const {refetch, data: pets=[], isLoading} = useQuery({
        queryKey : ['pets', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/my-pets?email=${user.email}`)
            return res.data
        }
       })
       return [pets, refetch, isLoading]
};

export default useMyPet;