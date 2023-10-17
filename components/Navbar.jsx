import Link from 'next/link'
import React, { useContext } from 'react'
import { PiUserLight } from 'react-icons/pi'
import { BsSearch, BsBag } from 'react-icons/bs'
import { CiLogout } from 'react-icons/ci'
import { useRouter } from 'next/router'
import { UserContext } from '@contexts/UserContext'

export default function Navbar() {
    const router = useRouter();
    const isHome = router.pathname === '/';
    const { user, setUser } = useContext(UserContext);

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            const { localStorage } = window;
            localStorage.clear();
            setUser(null)
            router.push('/login');
        }
    }

    return (
        <nav className={`lg:h-40 md:h-20 h-14 z-10  md:items-center border-b flex lg:flex-col lg:justify-evenly justify-between w-full p-2 ${isHome ? "text-white border-white" : "text-primary border-primary"} ${isHome && "absolute"}`}>
            <img onClick={() => router.push('/')} src={isHome ? '/LogoWhite.svg' : '/LogoRed.svg'} className='cursor-pointer md:h-20 h-10 lg:mx-auto' alt='Sattva Threads' />
            <section className={`flex w-full ${router.pathname.includes('admin') ? "justify-center" : "justify-evenly"}`}>
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
                        <div className='lg:flex hidden gap-20'>
                            <Link href="/collections/new-arrivals">New Arrivals</Link>
                            <Link href="/collections/saree">Saree</Link>
                            <Link href="/collections/kurta">Kurta</Link>
                            <Link href="/collections/salwar-suit">Salwar & Suit</Link>
                            <Link href="/collections/sale">Sale</Link>
                            {/* <Link href="/customer-support">Customer Support</Link> */}
                        </div>
                        <div className='flex gap-10 items-center'>
                            <Link href="/cart"><BsBag className='h-5 w-5' /></Link>
                            <Link href=""><BsSearch className='h-5 w-5' /></Link>
                            {!user?.id ? <Link href="/login"><PiUserLight className='h-6 w-6' /></Link> : <CiLogout onClick={handleLogout} className='h-6 w-6 cursor-pointer' />}
                        </div>
                    </>
                }
            </section>
        </nav>
    )
}
