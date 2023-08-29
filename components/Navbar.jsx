import Link from 'next/link'
import React from 'react'
import { PiUserLight } from 'react-icons/pi'
import { BsPerson, BsSearch, BsBag } from 'react-icons/bs'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='h-40 z-10 justify-evenly border-b border-white text-white p-2 w-full flex flex-col absolute'>
            <Image src='Logo.png' className='h-20 mx-auto' alt='Sattva Threads' />
            <section className='flex justify-evenly'>
                <div></div>
                <div className='flex gap-20'>
                    <Link href="">New Arrivals</Link>
                    <Link href="">Saree</Link>
                    <Link href="">Kurta</Link>
                    <Link href="">Salwar & Suit</Link>
                    <Link href="">Sale</Link>
                    <Link href="">Customer Support</Link>
                </div>
                <div className='flex gap-10 items-center'>
                    <Link href=""><PiUserLight className='h-6 w-6' /></Link>
                    <Link href=""><BsSearch className='h-5 w-5' /></Link>
                    <Link href=""><BsBag className='h-5 w-5' /></Link>
                </div>
            </section>
        </nav>
    )
}
