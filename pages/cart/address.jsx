import React, { useContext, useEffect, useState } from 'react'
import Loader from '@components/Loader';
import { UserContext } from '@contexts/UserContext';
import { AiFillStar } from 'react-icons/ai';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Layout from '@components/Layout';
import { SiGooglepay, SiPaytm, SiPhonepe } from 'react-icons/si';
import { CiDeliveryTruck } from 'react-icons/ci';


const Address = () => {

    const { user, userId } = useContext(UserContext);
    const [addresses, setAddresses] = useState({});
    const Router = useRouter();

    const fetchProducts = async () => {
        try {
            const res = await axios.get(`/api/user/cart/${userId}`);
            if (res.status !== 200) throw new Error("Failed to fetch products!");
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    const { isLoading, data } = useQuery(['address'], fetchProducts);

    useEffect(() => {
        !userId && Router.push('/');
    }, [])

    if (isLoading)
        return <Layout>Loading...</Layout>

    return (
        <Layout>
            <section className='lg:mx-20 min-h-[calc(100vh-5.5rem)] border border-red-500 rounded shadow-[0_0_8px] shadow-slate-300 md:mx-10 sm:mx-8 mx-4 my-4 flex flex-col md:gap-4 gap-2'>
                <section className='flex md:flex-row flex-col'>
                    <section className='md:w-fit w-full p-5 h-full flex flex-col flex-grow rounded bg-white gap-8'>
                        <div className='w-full flex justify-center'>
                            <div className='w-fit flex justify-center flex-col gap-1'>
                                <h1 className='text-center lg:text-3xl md:text-2xl sm:text-xl text-lg font-viga text-slate-800'>YOUR ADDRESS</h1>
                                <hr className='border-b-2 mx-[10%] border-red-500' />
                            </div>
                        </div>
                        <div className='w-full flex flex-col border border-slate-300 p-2 gap-2 rounded'>
                            <input type="text" placeholder='Full Name' value={user.name} className='border focus:outline-red-500 text-slate-600 focus:outline border-slate-300 p-1 px-2 rounded w-full' readOnly/>
                            <input type="text" placeholder='Email' value={user.email} className='border focus:outline-red-500 text-slate-600 focus:outline border-slate-300 p-1 px-2 rounded w-full' readOnly/>
                            <input type="text" placeholder='Phone Number' className='border focus:outline-red-500 focus:outline text-slate-600 border-slate-300 p-1 px-2 rounded w-full' />
                            <input type="text" placeholder='Street Address' className='border focus:outline-red-500 focus:outline text-slate-600 border-slate-300 p-1 px-2 rounded w-full' />
                            <div className='flex gap-2'>
                                <input type="text" placeholder='District' className='border focus:outline-red-500 focus:outline text-slate-600 border-slate-300 p-1 px-2 rounded w-full' />
                                <input type="text" placeholder='Pincode' className='border focus:outline-red-500 focus:outline text-slate-600 border-slate-300 p-1 px-2 rounded w-full' />
                            </div>
                        </div>
                    </section>
                    <section className='w-full p-5 flex flex-col flex-grow overflow-x-auto rounded bg-white gap-8'>
                        <div className='w-full flex justify-center'>
                            <div className='w-fit flex justify-center flex-col gap-1'>
                                <h1 className='text-center lg:text-3xl md:text-2xl sm:text-xl text-lg font-viga text-slate-800'>YOUR PRODUCTS</h1>
                                <hr className='border-b-2 mx-[10%] border-red-500' />
                            </div>
                        </div>
                        <aside className='flex gap-6'>
                            {data.length !== 0 && data.map(p => {
                                return <div
                                    className='flex relative bottomA flex-shrink-0 border cursor-pointer hover:border-red-500 border-slate-300 rounded p-3 pt-0 text-slate-700 hover:text-blue-500 flex-col gap-2'
                                    onClick={() => { Router.push(`/products/${p.id}`) }}
                                    // ref={(element) => { (productRefs.current[index] = element) }}
                                    key={p.id}>
                                    <img src={p.images[0]} className='h-48 p-2 w-40 duration-200 object-contain  bg-white rounded-lg' alt="" />
                                    <h4 className='text-inherit'>{p.name.length <= 18 ? p.name : `${p.name.substring(0, 18)}...`}</h4>
                                    <span className='flex rounded px-2 p-[0.2rem] bg-green-500 text-white items-center justify-center gap-1 w-fit'>{p.rating}<AiFillStar /></span>
                                    <div className='flex gap-2 items-end'>
                                        <span className='text-base text-slate-700 font-viga'>Rs {p.offerPrice}</span>
                                        <span className='text-base text-slate-500 line-through'>Rs {p.mrp}</span>
                                        <span className='text-base text-green-600'>{Math.round(((p.mrp - p.offerPrice) / p.mrp) * 100)}%off</span>
                                    </div>
                                </div>
                            })}
                        </aside>
                    </section>
                </section>
                <section className='flex flex-col gap-10'>
                    <div className='w-full flex justify-center'>
                        <div className='w-fit flex justify-center flex-col gap-1'>
                            <h1 className='text-center lg:text-3xl md:text-2xl sm:text-xl text-lg font-viga text-slate-800'>Select Mode of Payment</h1>
                            <hr className='border-b-2 mx-[10%] border-red-500' />
                        </div>
                    </div>
                    <div className='w-full flex sm:flex-row flex-col sm:justify-center px-10 mb-10 gap-5'>
                        <button className='border flex items-center gap-2 border-slate-400 text-slate-700 p-2 px-3 rounded focus:border-green-500 hover:bg-slate-100'><CiDeliveryTruck className='w-7 h-7'/>Cash On Delivery</button>
                        <button className='border flex items-center gap-2 border-slate-400 text-blue-700 p-2 px-3 rounded focus:border-green-500 hover:bg-slate-100'><SiPaytm className='w-8 h-8' /> Paytm</button>
                        <button className='border flex items-center gap-2 border-slate-400 text-purple-700 p-2 px-3 rounded focus:border-green-500 hover:bg-slate-100'><SiPhonepe className='w-6 h-6' />PhonePe</button>
                        <button className='border flex items-center gap-2 border-slate-400 text-slate-700 p-2 px-3 rounded focus:border-green-500 hover:bg-slate-100'><SiGooglepay className='w-9 h-9' />Google Pay</button>
                    </div>
                </section>
            </section>
        </Layout >
    )
}

export default Address