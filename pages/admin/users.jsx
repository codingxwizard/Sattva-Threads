import Layout from '@components/Layout'
import React, { useState } from 'react'

export default function users() {
  const [users, setUsers] = useState([{ id: '1', name: 'Raja Kumar Singh', phone: '9752159633', email: 'rajasgh18@gmail.com' }])
  const [isLoader, setIsLoader] = useState(false);

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
            {!isLoader && users.length !== 0 ? users.map(user => {
              console.log(user)
              return <tr key={user.id}>
                <td className='tele w-1/5'>{user.id}</td>
                <td className='tele w-1/5'>{user.name}</td>
                <td className='tele w-1/5'>{user.email}</td>
                <td className='tele w-1/5'>{user.phone}</td>
              </tr>;
            })
              : <tr></tr>}
          </tbody>
        </table>
      </section>
    </Layout>
  )
}
