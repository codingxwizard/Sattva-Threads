import CartItem from '@components/CartItem';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'


export default function Products() {
    const loader = [0, 1, 2, 3, 4]

    const fetchProducts = async ({ queryKey }) => {
        const res = await fetch(`/api/products`);
        if (!res.ok){
            throw new Error(`Error fetching products`);
        }
        return res.json();
    }
    const result = useQuery(['index'], fetchProducts);

    if (result.isLoading) {
        return (
            <section className='border border-red-400 rounded flex flex-col shadow-[0_0_8px] shadow-slate-200'>
                {loader.map((index) => {
                    return(
                        <section key={index} className='item p-4 rightAppear flex w-full md:h-[200px] h-[150px] gap-4 border-b border-slate-300'>
                            <aside className='md:w-[20%] sm:w-[30%] w-[40%] h-full'>
                                <div className='w-full h-full rounded bg-slate-200 pulse' />
                            </aside>
                            <aside className='flex flex-col gap-1 w-full md:gap-2'>
                                <span className='lg:h-5 md:h-[18px] sm:h-4 w-1/3 rounded bg-slate-200 pulse'></span>
                                <span className='lg:h-5 md:h-[18px] sm:h-4 w-1/3 rounded bg-slate-200 pulse'></span>
                                <span className='lg:h-5 md:h-[18px] sm:h-4 w-20 rounded bg-slate-200 pulse'></span>
                            </aside>
                        </section>
                )
                })}
            </section>

        )
    }

    const products = result.data

    return (
        <section className='border border-red-400 rounded flex flex-col shadow-[0_0_8px] shadow-slate-200'>
            {products.map(c => {
                return (
                <CartItem key={c.id} cartDetails={c} />
                )
            })}
        </section>
    )
}