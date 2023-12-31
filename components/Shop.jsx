'use client';
import { useRouter } from 'next/router'
import React from 'react'

export default function Shop() {
    const Router = useRouter();
    return (
        <section className='p-10 flex flex-col gap-10 items-center font-light text-primary'>
            <h1>Trending</h1>
            <section className='flex md:flex-row flex-col md:h-96 min-h-96 justify-center gap-8'>
                <img src="shop1.png" className='object-contain rounded' alt="" />
                <section className='md:w-[20%] w-full flex flex-col gap-3'>
                    <img src="shop2.png" className='object-contain h-1/2 md:block hidden w-fit rounded' alt="" />
                    <h2>Beige Woven Saree With Delicate Hand Work Detailing</h2>
                    <p className='text-green-600'>&#x20b9;5,366</p>
                    <button className='text-white bg-primary hover:bg-primaryHover tracking-wider p-3'>VIEW THIS PRODUCT</button>
                </section>
            </section>
        </section>
    )
}
