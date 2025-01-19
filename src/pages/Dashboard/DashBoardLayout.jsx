import React from 'react';
import useAuth from '../../hooks/useAuth';

const DashBoardLayout = () => {
    const {user, isAdmin} = useAuth()
    return (
        <div className='dark:text-white'>
            Welcome your dashboard {user.displayName} <span className='text-sm text-yellow-200'>{isAdmin && '(admin)'}</span>
        </div>
    );
};

export default DashBoardLayout;