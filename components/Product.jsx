import Image from 'next/image'
import React from 'react'

export default function Product({ detail: { name, image, price } }) {
    return (
        <section className='flex flex-col w-1/2 items-center gap-2'>
            <img src={image} className='rounded' alt="" />
            <h3 className=' text-center'>{name}</h3>
            <p className='text-green-600'>&#x20b9; {price}</p>
        </section>
    )
}
