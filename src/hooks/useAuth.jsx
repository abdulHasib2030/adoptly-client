import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider/AuthProvider';

const useAuth = () => {
    const authUser = useContext(AuthContext)
    return authUser
};

export default useAuth;