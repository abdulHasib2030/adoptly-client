import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'https://adoptly-nine.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {
    const { logoutUser} = useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log(token);
        config.headers.Authorization = `Bearer ${token}`
        return config;
    }, function(error){
        return Promise.reject(error)
    })

    axiosSecure.interceptors.response.use(function(response){
        return response
    }, async(error)=>{
        const status = error.response.status;
        if(status === 401 || status === 403){
            await logoutUser()
            navigate('/login')
        }
        return Promise.reject(error)

    })

    // useEffect(()=>{
    //     axiosSecure.interceptors.response.use( response=>{
           
    //         return response
    //     }, error =>{ 
    //         if(error.status === 401 || error.status === 403){
               
    //             logoutUser()
    //             .then(()=> {
                    
    //                 navigate('/login')
    //             })
    //             .catch(err => {
                    
    //             })
    //         }
    //         return Promise.reject(error)
    //     } )
    // }, [])

    return axiosSecure
};

export default useAxiosSecure;