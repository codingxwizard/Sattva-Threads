'use client';
import Layout from '@components/Layout'
import Loader from '@components/Loader';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function users() {
  const [users, setUsers] = useState([])
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('/api/user');
        setUsers(res.data);
        setIsLoader(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUsers();
  }, [])

  return (
    <Layout>
      <section className='p-14 flex flex-col items-center gap-2'>
        <h1 className='text-center text-primary'>Users</h1>
        <span className='text-slate-600 text-lg'>{users.length} Entries</span>
        <table className='border mt-5 border-slate-800 w-full rounded'>
          <thead className='bg-red-50'>
            <tr>
              <th className='head w-1/4'>Id</th>
              <th className='head w-1/4'>Name</th>
              <th className='head w-1/4'>Email</th>
              <th className='head w-1/4'>Phone Number</th>
            </tr>
          </thead>
          <tbody className='text-slate-700'>
            {!isLoader && (users.length !== 0 ? users.map(user => {
              return <tr key={user.id}>
                <td className='tele w-1/5'>{user.id}</td>
                <td className='tele w-1/5'>{user.name}</td>
                <td className='tele w-1/5'>{user.email}</td>
                <td className='tele w-1/5'>{user.phone}</td>
              </tr>;
            })
              : <tr></tr>)}
          </tbody>
        </table>
        {isLoader && <Loader h={40} w={40} m={10} c="red"/>}
      </section>
    </Layout>
  )
}
