import React from 'react';
import useAuth from '../../hooks/useAuth';
import Loading from '../../components/Utlies/Loading';
import { Helmet } from 'react-helmet-async';
import { PieChart, Pie, Cell, Bar, BarChart, YAxis, XAxis, CartesianGrid, Rectangle, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DashBoardLayout = () => {
  const { user, isAdmin, loading } = useAuth()
  const { data: items, isLoading } = useQuery({
    queryKey: ['count', 'category-product'],
    queryFn: async () => {
      const [res1, res2] = await Promise.all([
        axios.get('https://adoptly-nine.vercel.app/count/'),
        axios.get('https://adoptly-nine.vercel.app/category-product/')
      ])
      return [res1.data, res2.data]
    }
  })

  // const data = [
  //     {
  //       name: "Page A",
  //       uv: 4000,
  //       pv: 2400,
  //       amt: 2400,
  //     },
  //     {
  //       name: "Page B",
  //       uv: 3000,
  //       pv: 1398,
  //       amt: 2210,
  //     },
  //     {
  //       name: "Page C",
  //       uv: 2000,
  //       pv: 9800,
  //       amt: 2290,
  //     },
  //     {
  //       name: "Page D",
  //       uv: 2780,
  //       pv: 3908,
  //       amt: 2000,
  //     },
  //     {
  //       name: "Page E",
  //       uv: 1890,
  //       pv: 4800,
  //       amt: 2181,
  //     },
  //     {
  //       name: "Page F",
  //       uv: 2390,
  //       pv: 3800,
  //       amt: 2500,
  //     },
  //     {
  //       name: "Page G",
  //       uv: 3490,
  //       pv: 4300,
  //       amt: 2100,
  //     },
  //   ];
  if (isLoading) return <Loading />

  const data1 = items[0].map(item => ({
    name: item.label,
    total: item.value
  }))

  const data = items[1].map(item => ({
    name: item.name + ' ' + item.value,
    value: item.value
  }))


  //  const data = items[1].map((item, idx) =>({
  //   name: item[idx],
  //   uv: item
  //  }))
  // items[1].map((item, idx)=>{
  //   console.log(item[idx]);
  // })
  // const {data: categoryData, isPending} = useQuery({
  //     queryKey: ['categoryData'],
  //     queryFn: async ()=>{
  //       const res = await axios.get('http://localhost:5000/category-product/')
  //       return res.data
  //     }
  // })


  return (
    <div className=''>
      <Helmet>
        <title>Adoptly | Dashboard</title>
      </Helmet>

      <div className='lg:flex items-center justify-between overflow-auto'>
        <div className='border dark:border-gray-600  p-5'>
        <h1 className='text-3xl text-center font-bold my-3 dark:text-white'>Category Added Pets</h1>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data1.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className='border dark:border-gray-600 p-5'>
          <h1 className='text-3xl text-center font-bold my-3 dark:text-white'>Pets & Donation</h1>
          <BarChart 
            width={800}
            height={500}
            data={data1}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Bar dataKey="total" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} /> */}
            <Bar dataKey="total" fill="#82ca9d" activeBar={<Rectangle fill="gold"  stroke="purple" />} />
          </BarChart>
        </div>

      </div>



    </div>
  );
};

export default DashBoardLayout;