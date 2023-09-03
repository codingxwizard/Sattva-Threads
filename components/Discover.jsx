import React from 'react'

export default function Discover() {
    return (
        <section className='w-full flex flex-col gap-10 items-center p-10 pb-16 font-light bg-[#EFEFEF] text-primary'>
            <h1>Discover More</h1>
            <section className='flex h-96 items-center overflow-x-auto gap-10'>
                <img src="discover1.png" className='h-3/4 rounded' alt="" />
                <img src="discover2.png" className='h-3/4 rounded' alt="" />
                <img src="collection2.png" className='h-full rounded' alt="" />
                <img src="collection4.png" className='h-3/4 rounded' alt="" />
            </section>
        </section>
    )
}
