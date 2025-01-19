import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/Utlies/Loading';

const LogRedirect = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if(loading) return <Loading></Loading>
    if (user){
      
   return location.state ? <Navigate to='/'></Navigate> : <Navigate to={'/'}></Navigate>
    }

    return children;
};

export default LogRedirect;