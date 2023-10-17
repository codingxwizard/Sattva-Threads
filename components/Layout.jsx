import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoLogoWhatsapp } from 'react-icons/io';
import { UserContext } from '@contexts/UserContext';

export default function Layout({ children }) {
    const location = useRouter().pathname.includes('admin');
    const { user } = useContext(UserContext);
    const { getUser } = useContext(UserContext);
    useEffect(() => {
        getUser();
    }, []);
    return (
        <>
            <Navbar />
            <main className='min-h-[calc(100vh-10rem)]'>{children}</main>
            <Link href="https://wa.me/9926685773?text=hi">
                <IoLogoWhatsapp className='fixed z-50 right-0 bottom-0 w-12 h-12 text-green-600 p-2 hover:scale-110 transition-transform rounded m-8 bg-slate-100' />
            </Link>
            {
                user?.id === "652bea31e4fb056f065e09e3" && <Link href={location ? "/" : "/admin/dashboard"} ><span className='fixed z-50 left-0 bottom-0 text-lg text-red-500 border border-red-500 p-3 px-4 hover:scale-110 transition-transform rounded m-8 bg-red-100'>{location ? "Customer" : "Admin"}</span></Link>
            }
            <Footer />
        </>
    )
}
