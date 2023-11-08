'use client';
import React, { useEffect, useState } from 'react'
import Product from './Product';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

export default function FeaturedCollection() {
    const Router = useRouter();

    // const [products, setProducts] = useState([]);
    // const [isLoader, setIsLoader] = useState(true);
    const loader = [0, 1, 2, 3, 4, 5]


    const fetchProducts = async ({ queryKey }) => {
        const res = await fetch(`/api/products`);
        if (!res.ok){
            throw new Error(`Error fetching products`);
        }
        return res.json();
    }
    const result = useQuery(['products'], fetchProducts);

    if (result.isLoading) {
        return (
            loader.map((index) => {
                return (
                    <div key={index} className='flex flex-col gap-2 items-center cursor-pointer'>
                        <div className='bg-slate-200 sm:h-[300px] h-[250px] pulse w-full rounded' />
                        <div className='bg-slate-200 h-[20px] pulse w-3/4'></div>
                        <div className='bg-slate-200 h-[20px] w-1/2 pulse'></div>
                    </div>
                )
            })
        )
    }
    
    const products = result.data;

    return (
        <section className='flex flex-col gap-5 items-center px-4 font-light text-primary md:px-10'>
            <h1>Featured Collections</h1>
            <section className='grid gap-8 w-full lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2'>
                { products.map((p, index) => {
                    return index <= 5 && <Product key={index} detail={p} />
                }) }
            </section>
            <button onClick={() => Router.push('/products')} className='p-3 px-4 text-white bg-primary hover:bg-primaryHover w-fit'>View All Products</button>
        </section>
    )
}
