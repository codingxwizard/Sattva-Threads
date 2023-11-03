'use client';
import React, { useEffect, useState } from 'react'
import Product from './Product';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function FeaturedCollection() {
    const Router = useRouter();

    const [products, setProducts] = useState([]);
    const [isLoader, setIsLoader] = useState(true);
    const loader = [0, 1, 2, 3, 4, 5]


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
        <section className='text-primary font-light items-center flex-col flex gap-5 md:px-10 px-4'>
            <h1>Featured Collections</h1>
            <section className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 w-full gap-8'>
                {
                    !isLoader ? products.map((p, index) => {
                        return index <= 5 && <Product key={index} detail={p} />;
                    }) : loader.map((index) => {
                        return <div key={index} className='flex flex-col cursor-pointer items-center gap-2'>
                            <div className='bg-slate-200 sm:h-[300px] h-[250px] pulse w-full rounded' />
                            <div className='bg-slate-200 h-[20px] pulse w-3/4'></div>
                            <div className='bg-slate-200 h-[20px] w-1/2 pulse'></div>
                        </div>
                    })
                }
            </section>
            <button onClick={() => Router.push('/products')} className='p-3 px-4 bg-primary hover:bg-primaryHover text-white w-fit'>View All Products</button>
        </section>
    )
}
