import Image from 'next/image'
import React from 'react'

export default function Background() {
    return (
        <section className='min-h-screen relative'>
            <img src="bg1.png" className='absolute w-full h-full' alt="background" />
            <div className='absolute w-full h-full bg-black opacity-30'></div>
            <ul className='absolute bottom-0 right-0 flex gap-3 m-10'>
                <li className='w-3 h-3 rounded-full border-2 border-white bg-white'></li>
                <li className='w-3 h-3 rounded-full border-2 border-white'></li>
                <li className='w-3 h-3 rounded-full border-2 border-white'></li>
                <li className='w-3 h-3 rounded-full border-2 border-white'></li>
                <li className='w-3 h-3 rounded-full border-2 border-white'></li>
            </ul>
        </section>
    )
}
