import React from 'react';
import useAuth from '../../hooks/useAuth';
import Loading from '../../components/Utlies/Loading';

const DashBoardLayout = () => {
    const {user, isAdmin, loading} = useAuth()
    
    return (
        <div className='dark:text-white'>
            Welcome your dashboard {user.displayName} <span className='text-sm text-yellow-200'>{isAdmin && '(admin)'}</span>
        </div>
    );
};

export default DashBoardLayout;