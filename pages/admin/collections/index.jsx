'use client';
import Layout from '@components/Layout'
import { useState } from 'react';
import Loader from '@components/Loader';
import { PiEyeLight, PiNotePencilLight, PiTrashSimpleLight } from 'react-icons/pi';
import { useRouter } from 'next/router';
import AdminDropDown from '@components/AdminDropDown';
export default function index() {
    const [collections, setCollections] = useState([{ id: 1, image: "", name: "collection 1" }])
    const [isLoader, setIsLoader] = useState(false);
    const Router = useRouter();

    return (
        <Layout>
            <section className='font-light flex flex-col p-10 px-14 gap-2'>
                <h1 className='text-center text-primary'>Collections</h1>
                <p className='text-slate-600 text-center text-lg'>{collections.length} Entries</p>
                <section className='flex flex-col gap-2'>
                    <h2 className='text-2xl text-primary'>Add Categories</h2>
                    <div className='w-full flex gap-4'>
                        <input placeholder='collection Name' className='w-1/2 border font-light text-slate-700 focus:outline-none focus:border-primary placeholder:font-light rounded border-slate-300 p-2 px-3 text-lg' />
                        <AdminDropDown />
                    </div>
                    <button className='w-fit p-2 px-4 bg-primary text-white rounded'>Save</button>
                </section>
                <table className='mt-5'>
                    <thead className='bg-red-50'>
                        <tr>
                            <th className='head w-[40%]'>Image</th>
                            <th className='head w-[40%]'>Name</th>
                            <th className='head w-[10%]'>Edit</th>
                            <th className='head w-[10%]'>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-slate-700'>
                        {!isLoader && collections.length !== 0 ? collections.map(collection => {
                            return <tr key={collection.id}>
                                <td className='tele'><img src={collection.image} className='w-20 h-20 m-auto object-contain' alt="" /></td>
                                <td className='tele'>{collection.name}</td>
                                <td onClick={() => Router.push(`/admin/producollection/${collection.id}`)} className='tele w-[6.25%]'><PiNotePencilLight className='cursor-pointer w-6 h-6 hover:text-green-700 text-slate-600 m-auto' /></td>
                                <td className='tele'><PiTrashSimpleLight className='cursor-pointer w-6 h-6 hover:text-red-700 text-slate-600 m-auto' /></td>
                            </tr>;
                        })
                            : <tr></tr>}
                    </tbody>
                </table>
                {isLoader && <Loader h={25} w={25} m={0} c="red" />}
            </section>
        </Layout>
    )
}
