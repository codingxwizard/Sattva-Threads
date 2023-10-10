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
            <img onClick={() => router.push('/')} src={isHome ? '/LogoWhite.svg' : '/LogoRed.svg'} className='cursor-pointer h-20 mx-auto' alt='Sattva Threads' />
            <section className={`flex ${router.pathname.includes('admin') ? "justify-center" : "justify-evenly"}`}>
                {router.pathname.includes('admin')
                    ? <div className='flex gap-20'>
                        <Link href="/admin/dashboard">Dashboard</Link>
                        <Link href="/admin/users">Users</Link>
                        <Link href="/admin/products">Products</Link>
                        <Link href="/admin/collections">Collections</Link>
                        <Link href="/admin/backgrounds">Backgrounds</Link>
                    </div>
                    : <>
                        <div></div>
                        <div className='flex gap-20'>
                            <Link href="/collections/new-arrivals">New Arrivals</Link>
                            <Link href="/collections/saree">Saree</Link>
                            <Link href="/collections/kurta">Kurta</Link>
                            <Link href="/collections/salwar-suit">Salwar & Suit</Link>
                            <Link href="/collections/sale">Sale</Link>
                            <Link href="/customer-support">Customer Support</Link>
                        </div>
                        <div className='flex gap-10 items-center'>
                            <Link href="/login"><PiUserLight className='h-6 w-6' /></Link>
                            <Link href=""><BsSearch className='h-5 w-5' /></Link>
                            <Link href="/cart"><BsBag className='h-5 w-5' /></Link>
                        </div>
                    </>
                }
            </section>
        </nav>
    )
}
