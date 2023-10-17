import { useRouter } from 'next/router'
import React from 'react'

export default function Product({ detail: { id, name, images, price } }) {
    const router = useRouter();
    return (
        <section onClick={() => router.push('/products/' + id)} className='flex flex-col cursor-pointer items-center gap-2'>
            <img src={images[0]} className='rounded' alt="" />
            <h3 className=' text-center'>{name || "Beige and Pink Woven saree With Delicate Hand Work Detailing"}</h3>
            <p className='text-green-600'>&#x20b9;{price || 5366}</p>
        </section>
    )
}
