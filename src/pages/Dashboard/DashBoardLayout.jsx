import React from 'react';
import useAuth from '../../hooks/useAuth';
import Loading from '../../components/Utlies/Loading';
import { Helmet } from 'react-helmet-async';

const DashBoardLayout = () => {
    const {user, isAdmin, loading} = useAuth()
    
    return (
        <div className=''>
            <Helmet>
                    <title>Adoptly | Dashboard</title>
                </Helmet>
            Welcome your dashboard {user.displayName} <span className='text-sm text-yellow-200'>{isAdmin && '(admin)'}</span>
        </div>
    );
};

export default DashBoardLayout;