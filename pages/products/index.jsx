'use client';
import CartItem from '@components/CartItem';
import Layout from '@components/Layout'
import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function index() {

    const [products, setProducts] = useState([0, 1, 2, 3, 4, 5]);
    const [isLoader, setIsLoader] = useState(true);
    const loader = [0, 1, 2, 3, 4]

    useEffect(() => {
        const fetchProducts = async () => {

            try {
                const res = await axios.get('/api/products');
                setIsLoader(false);
                setProducts(res.data);
            } catch (error) {

            }
        }
        fetchProducts()
    })

    return (
        <Layout>
            <section className='flex flex-col md:gap-4 gap-2 lg:p-14 md:p-10 sm:p-8 py-6 p-4'>
                <h1 className='font-light text-primary md:mb-5 mb-2'>Products</h1>
                <section className='border border-red-400 rounded flex flex-col shadow-[0_0_8px] shadow-slate-200'>
                    {products.map(c => {
                        return !isLoader
                            ? <CartItem key={c.id} cartDetails={c} />
                            : <section key={c} className='item p-4 rightAppear flex w-full md:h-[200px] h-[150px] gap-4 border-b border-slate-300'>
                                <aside className='md:w-[20%] sm:w-[30%] w-[40%] h-full'>
                                    <div className='w-full h-full bg-slate-200 pulse rounded' />
                                </aside>
                                <aside className='flex flex-col w-full md:gap-2 gap-1'>
                                    <span className='lg:h-5 md:h-[18px] sm:h-4 w-1/3 rounded bg-slate-200 pulse'></span>
                                    <span className='lg:h-5 md:h-[18px] sm:h-4 w-1/3 rounded bg-slate-200 pulse'></span>
                                    <span className='lg:h-5 md:h-[18px] sm:h-4 w-20 rounded bg-slate-200 pulse'></span>
                                </aside>
                            </section>
                    })}
                </section>
            </section>
        </Layout>
    )
}
