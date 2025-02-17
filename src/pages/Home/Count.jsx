import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import CountUp from "react-countup";
import Loading from '../../components/Utlies/Loading';
import { Card } from 'flowbite-react';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Count = () => {

const axiosPublic = useAxiosPublic()

  const { data: stars = [], isLoading } = useQuery({
    queryKey: ['count'],
    queryFn: async () => {
      const res = await axiosPublic.get('/count')
      return res.data;
    }
  })

  return (
    <div
      className="mt-16">
      <div className="dark:text-white mx-auto flex justify-center gap-10">
        {
          isLoading ? <Loading></Loading> :
            <div className='grid grid-cols-1 w-full md:grid-cols-3 gap-6'>
              {
              stars.map(star =>

                <Card className="">
        <CountUp end={star.value} duration={5}  className='font-bold text-3xl' enableScrollSpy={true} />

                  <h5 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                   {star.icon}
                  </h5>
                  <p className="font-normal  text-gray-700 dark:text-gray-400">
                    {star.label}
                  </p>

                </Card>


              )}
            </div>
              }
      </div>

    </div>
  );
};

export default Count;