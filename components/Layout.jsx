'use client';
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
    const Router = useRouter();
    useEffect(() => {
        getUser();
        if (location && user.id !== "6534d3bf4229e2a4886e90d0") {
            Router.push("/");
        }
    }, []);

    return (
        <>
            <Navbar />
            <main className='min-h-[calc(100vh-10rem)]'>{children}</main>
            <Link href="https://wa.me/9958257547">
                <IoLogoWhatsapp className='fixed z-50 right-0 bottom-0 md:w-12 md:h-12 w-10 h-10 text-green-600 p-2 hover:scale-110 transition-transform rounded md:m-8 m-4 bg-slate-100' />
            </Link>
            {
                user?.id === "6534d3bf4229e2a4886e90d0" && <Link href={location ? "/" : "/admin/dashboard"} ><span className='fixed z-50 left-0 bottom-0 text-lg text-red-500 border border-red-500 md:p-3 md:px-4 p-2 px-3 hover:scale-110 transition-transform rounded md:m-8 m-4 bg-red-100'>{location ? "Customer" : "Admin"}</span></Link>
            }
            <Footer />
        </>
    )
}
