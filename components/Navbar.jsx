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
            dropDownBoxRef1.current.style.animation = 'dropHide 0.3s ease-in-out';
            setTimeout(() => {
                setIsOpen1(false)
            }, 250);
        } else {
            setIsOpen1(true)
        }
    }

    const handleClickOutside = (event) => {
        if (isOpen1 && dropDownRef1.current && !dropDownRef1.current.contains(event.target)) {
            dropDownBoxRef1.current.style.animation = 'dropHide 0.3s ease-in-out';
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
            <section className={`flex w-full items-center ${router.pathname.includes('admin') ? "lg:justify-center" : "lg:justify-evenly"} justify-end`}>
                {router.pathname.includes('admin')
                    ? <div className='sm:flex lg:gap-20 md:gap-10 sm:gap-6 hidden'>
                        <Link href="/admin/dashboard">Dashboard</Link>
                        <Link href="/admin/users">Users</Link>
                        <Link href="/admin/products">Products</Link>
                        <Link href="/admin/collections">Collections</Link>
                        <Link href="/admin/backgrounds">Backgrounds</Link>
                    </div>
                    : <>
                        <div className='lg:flex hidden'></div>
                        <div className='lg:flex hidden gap-20'>
                            <Link href="/collections/new-arrivals">New Arrivals</Link>
                            <Link href="/collections/saree">Saree</Link>
                            <Link href="/collections/kurta">Kurta</Link>
                            <Link href="/collections/salwar-suit">Salwar & Suit</Link>
                            <Link href="/collections/sale">Sale</Link>
                            {/* <Link href="/customer-support">Customer Support</Link> */}
                        </div>
                        <div className='flex gap-10 items-center'>
                            <Link href="/cart"><BsBag className='md:h-5 md:w-5 w-4 h-4' /></Link>
                            <Link href=""><BsSearch className='md:h-5 md:w-5 w-4 h-4' /></Link>
                            {!user?.id ? <Link href="/login"><PiUserLight className='md:h-6 md:w-6 w-5 h-5' /></Link> : <CiLogout onClick={handleLogout} className='md:h-6 md:w-6 w-5 h-5 cursor-pointer' />}
                        </div>
                        <div ref={dropDownRef1} className='sm:hidden relative flex'>
                            <div onClick={handleDropDown1} className={`flex flex-col gap-[0.375rem] border-black ${isOpen1 ? "border-red-500" : "border-white"} cursor-pointer hover:border-red-500`}>
                                <div className={`border-b-2 w-6 border-inherit rounded-full ease-in-out transition-all relative duration-200 ${isOpen1 ? "rotate-45 top-2" : "top-0"}`} />
                                <div className={`border-b-2 w-6 border-inherit rounded-full ease-in-out transition-all duration-200 ${isOpen1 ? "w-[0]" : ""}`} />
                                <div className={`border-b-2 w-6 border-inherit rounded-full ease-in-out transition-all relative duration-200 ${isOpen1 ? "-rotate-45 bottom-2" : "bottom-0"}`} />
                            </div>
                            {isOpen1 && <div ref={dropDownBoxRef1} className='absolute px-4 right-0 dropDownShow text-slate-600 bg-white flex flex-col gap-2 rounded shadow-[0_0_10px_0] shadow-slate-500 mt-8 py-2'>
                                <Link href='/' className='flex gap-1 items-center hover:text-red-600 transition-all duration-600'>Home</Link>
                                <Link href='/categories' className='flex items-center hover:text-red-600 transition-all duration-600 gap-1'>Categories</Link>
                                <Link href='/about-us' className='flex items-center hover:text-red-600 transition-all duration-600 gap-1'>About</Link>
                                <Link href='/cart' className=' flex gap-1 items-center text-slate-600 hover:text-red-600'>
                                    <div className='flex relative'>
                                        <BsCart3 className={`w-6 h-6 mr-1 cursor-pointer ${location.includes('/cart') ? "text-red-500" : "text-inherit"}`} />
                                        <span className='bg-red-600 flex pt-[0.05rem] absolute px-[0.3rem] font-bold -top-1 ml-4 text-white text-[0.6rem] h-fit w-fit rounded-full'>{user?.cartItems?.length}</span>
                                    </div>
                                    Cart</Link>
                                <button onClick={handleLogout} className='flex hover:text-red-500 items-center gap-1'><CiLogout className='w-7 h-7' />{user._id ? "Logout" : "Login"}</button>
                            </div>}
                        </div>
                    </>
                }
            </section>
        </nav>
    )
}
