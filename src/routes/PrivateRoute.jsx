import { getAuth } from 'firebase/auth';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Utlies/Loading';
import { AuthContext } from '../provider/AuthProvider/AuthProvider';

const PrivatRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Loading />
    }
    if(user){
        return children
    }

    return <Navigate to={'/login'} state={location.pathname} replace></Navigate>
};

export default PrivatRoute;