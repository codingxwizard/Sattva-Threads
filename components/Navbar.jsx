import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { PiUserLight } from 'react-icons/pi'
import { BsSearch, BsBag, BsCart3 } from 'react-icons/bs'
import { CiLogout } from 'react-icons/ci'
import { useRouter } from 'next/router'
import { UserContext } from '@contexts/UserContext'

export default function Navbar() {
    const router = useRouter();
    const [isOpen1, setIsOpen1] = useState(false);
    const dropDownRef1 = useRef(null);
    const dropDownBoxRef1 = useRef(null);
    const location = useRouter().pathname;
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

    const handleDropDown1 = () => {
        if (isOpen1) {
            dropDownBoxRef1.current.style.animation = 'dropDownDisappear 0.3s ease-in-out';
            setTimeout(() => {
                setIsOpen1(false)
            }, 250);
        } else {
            setIsOpen1(true)
        }
    }

    const handleClickOutside = (event) => {
        if (isOpen1 && dropDownRef1.current && !dropDownRef1.current.contains(event.target)) {
            dropDownBoxRef1.current.style.animation = 'dropDownDisappear 0.3s ease-in-out';
            setTimeout(() => {
                setIsOpen1(false)
            }, 250);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen1]);

    return (
        <nav className={`lg:h-40 md:h-20 h-14 z-10 md:px-8 px-4  md:items-center border-b flex lg:flex-col lg:justify-evenly justify-between w-full p-2 ${isHome ? "text-white border-white" : "text-primary border-primary"} ${isHome && "absolute"}`}>
            <img onClick={() => router.push('/')} src={isHome ? '/LogoWhite.svg' : '/LogoRed.svg'} className='cursor-pointer md:h-20 h-10 lg:mx-auto' alt='Sattva Threads' />
            <section className={`flex w-full items-center ${router.pathname.includes('admin') ? "lg:justify-center" : "lg:justify-between"} justify-end`}>
                {router.pathname.includes('admin')
                    ? <div className='flex lg:gap-20 md:gap-10 sm:gap-6'>
                        <Link className='sm:flex hidden' href="/admin/dashboard">Dashboard</Link>
                        <Link className='sm:flex hidden' href="/admin/users">Users</Link>
                        <Link className='sm:flex hidden' href="/admin/products">Products</Link>
                        <Link className='sm:flex hidden' href="/admin/collections">Collections</Link>
                        <Link className='sm:flex hidden' href="/admin/backgrounds">Backgrounds</Link>
                        <div ref={dropDownRef1} className='sm:hidden z-10 relative flex'>
                            <div onClick={handleDropDown1} className={`flex flex-col gap-[0.375rem] border-black ${!isHome ? "border-primary" : "border-white"} cursor-pointer`}>
                                <div className={`border-b-2 w-6 border-inherit rounded-full ease-in-out transition-all relative duration-200 ${isOpen1 ? "rotate-[45Deg] top-2" : "top-0"}`} />
                                <div className={`border-b-2 w-6 border-inherit rounded-full ease-in-out transition-all duration-200 ${isOpen1 ? "w-[0]" : ""}`} />
                                <div className={`border-b-2 w-6 border-inherit rounded-full ease-in-out transition-all relative duration-200 ${isOpen1 ? "-rotate-[45Deg] bottom-2" : "bottom-0"}`} />
                            </div>
                            {isOpen1 && <div ref={dropDownBoxRef1} className='absolute border border-red-500 px-3 w-[120px] right-0 text-sm drop-down-appear text-slate-600 bg-white flex flex-col gap-2 rounded shadow-[0_0_10px_0] shadow-slate-500 mt-8 py-2'>
                                {user?.id && <span className='flex items-center text-red-600 underline transition-all duration-600 gap-1'>{user.name}</span>}
                                <Link href="/admin/dashboard">Dashboard</Link>
                                <Link href="/admin/users">Users</Link>
                                <Link href="/admin/products">Products</Link>
                                <Link href="/admin/collections">Collections</Link>
                                <Link href="/admin/backgrounds">Backgrounds</Link>
                            </div>}
                        </div>
                    </div>
                    : <>
                        <div className='lg:flex hidden text-white underline'>{user?.name}</div>
                        <div className='lg:flex hidden gap-16'>
                            <Link href="/collections/new-arrivals">New Arrivals</Link>
                            <Link href="/collections/saree">Saree</Link>
                            <Link href="/collections/kurta">Kurta</Link>
                            <Link href="/collections/salwar-suit">Salwar & Suit</Link>
                            <Link href="/collections/sale">Sale</Link>
                            {/* <Link href="/customer-support">Customer Support</Link> */}
                        </div>
                        <div className='flex md:gap-10 gap-6 items-center'>
                            <Link href="/cart"><BsBag className='md:h-5 md:w-5 w-4 h-4' /></Link>
                            <Link href=""><BsSearch className='md:h-5 md:w-5 w-4 h-4' /></Link>
                            {!user?.id ? <Link href="/login"><PiUserLight className='md:h-6 md:w-6 w-5 h-5' /></Link> : <CiLogout onClick={handleLogout} className='md:h-6 md:w-6 w-5 h-5 cursor-pointer' />}
                            <div ref={dropDownRef1} className='lg:hidden z-10 relative flex'>
                                <div onClick={handleDropDown1} className={`flex flex-col gap-[0.375rem] border-black ${!isHome ? "border-primary" : "border-white"} cursor-pointer`}>
                                    <div className={`border-b-2 w-6 border-inherit rounded-full ease-in-out transition-all relative duration-200 ${isOpen1 ? "rotate-[45Deg] top-2" : "top-0"}`} />
                                    <div className={`border-b-2 w-6 border-inherit rounded-full ease-in-out transition-all duration-200 ${isOpen1 ? "w-[0]" : ""}`} />
                                    <div className={`border-b-2 w-6 border-inherit rounded-full ease-in-out transition-all relative duration-200 ${isOpen1 ? "-rotate-[45Deg] bottom-2" : "bottom-0"}`} />
                                </div>
                                {isOpen1 && <div ref={dropDownBoxRef1} className='absolute border border-red-500 px-3 w-[120px] right-0 text-sm drop-down-appear text-slate-600 bg-white flex flex-col gap-2 rounded shadow-[0_0_10px_0] shadow-slate-500 mt-8 py-2'>
                                    {user?.id && <span className='flex items-center text-red-600 underline transition-all duration-600 gap-1'>{user.name}</span>}
                                    <Link href="/collections/new-arrivals">New Arrivals</Link>
                                    <Link href="/collections/saree">Saree</Link>
                                    <Link href="/collections/kurta">Kurta</Link>
                                    <Link href="/collections/salwar-suit">Salwar & Suit</Link>
                                    <Link href="/collections/sale">Sale</Link>
                                </div>}
                            </div>
                        </div>
                    </>
                }
            </section>
        </nav>
    )
}
