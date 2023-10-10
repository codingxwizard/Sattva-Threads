import { useRouter } from 'next/router'
import React from 'react'

export default function Product({ detail: { id, name, image, price } }) {
    const router = useRouter();
    return (
        <section onClick={() => router.push('/products/' + id)} className='flex flex-col cursor-pointer w-1/2 items-center gap-2'>
            <img src={image} className='rounded' alt="" />
            <h3 className=' text-center'>{name}</h3>
            <p className='text-green-600'>&#x20b9;{price}</p>
        </section>
    )
}
