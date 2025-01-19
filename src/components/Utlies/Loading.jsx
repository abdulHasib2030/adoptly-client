import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Loading = () => {
    return (
        <div className='space-y-5 dark:bg-gray-900'>

      <Skeleton height={50} baseColor='black'></Skeleton>
      <Skeleton count={30} />

        </div>
    );
};

export default Loading;