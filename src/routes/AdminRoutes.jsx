import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../components/Utlies/Loading';
import { Navigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const AdminRoutes = ({children}) => {
    const {user , isAdmin, loading} = useAuth()
    // if(loading || !isAdmin){
    //     return   <Skeleton count={3} />
    // }
    if(user && isAdmin){
        return children
    }

    return <Navigate to={'/'}></Navigate>
};

export default AdminRoutes;