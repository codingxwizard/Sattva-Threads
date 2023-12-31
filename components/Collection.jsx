'use client';
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function Collection() {
    const Router = useRouter();
    const collections = [
        {
            id: 1,
            name: "Fresh New Arrivals",
            image: "collection1.png"
        }, {
            id: 2,
            name: "Banarsi Collection",
            image: "collection2.png"
        }, {
            id: 3,
            name: "Linen Collection",
            image: "collection3.png"
        }, {
            id: 4,
            name: "Sambalpuri Collection",
            image: "collection4.png"
        }, {
            id: 5,
            name: "Baluchari Collection",
            image: "collection5.png"
        }, {
            id: 6,
            name: "Katha Stitch Collection",
            image: "collection6.png"
        }]
    return (
        <section className='grid lg:grid-cols-3 sm:grid-cols-2 gap-5 w-full font-light flex-wrap md:px-10 p-4'>
            {collections.map((collection, index) => {
                return <div key={index} onClick={() => Router.push(`/collections/${encodeURIComponent(collection.name)}`)} className='relative cursor-pointer w-full  rounded text-[#363636] overflow-hidden hover:text-primary hover:font-normal lg:h-[500px] md:h-[400px] h-[300px]'>
                    {/* <div className='absolute w-full h-full bg-black opacity-20'></div> */}
                    <img src={collection.image} className='w-full hover:scale-105 transition-transform duration-300 h-full' alt="" />
                    <div className='absolute bottom-0 m-8 flex flex-col gap-2'>
                        <h3 className='text-base text-white font-normal'>{collection.name.toUpperCase()}</h3>
                        <button className='p-3 px-4 text-sm bg-white'>VIEW PRODUCTS</button>
                    </div>
                </div>
            })}
        </section>
    )
}
