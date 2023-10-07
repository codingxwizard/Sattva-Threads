import Link from 'next/link'
import React from 'react'
import { PiUserLight } from 'react-icons/pi'
import { BsSearch, BsBag } from 'react-icons/bs'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter();
    const isHome = router.pathname === '/';
    return (
        <nav className={`h-40 z-10 justify-evenly border-b ${isHome ? "text-white border-white" : "text-primary border-primary"} p-2 ${isHome && "absolute"} w-full flex flex-col`}>
            <img onClick={()=> router.push('/')} src={isHome ? '/LogoWhite.svg' : '/LogoRed.svg'} className='cursor-pointer h-20 mx-auto' alt='Sattva Threads' />
            <section className='flex justify-evenly'>
                <div></div>
                <div className='flex gap-20'>
                    <Link href="/new-arrivals">New Arrivals</Link>
                    <Link href="/saree">Saree</Link>
                    <Link href="/kurta">Kurta</Link>
                    <Link href="">Salwar & Suit</Link>
                    <Link href="/sale">Sale</Link>
                    <Link href="/customer-support">Customer Support</Link>
                </div>
                <div className='flex gap-10 items-center'>
                    <Link href="/login"><PiUserLight className='h-6 w-6' /></Link>
                    <Link href=""><BsSearch className='h-5 w-5' /></Link>
                    <Link href="/cart"><BsBag className='h-5 w-5' /></Link>
                </div>
            </section>
        </nav>
    )
}
