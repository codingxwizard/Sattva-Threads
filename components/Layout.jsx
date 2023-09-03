import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className='min-h-[calc(100vh-10rem)]'>{children}</main>
            <Footer />
        </>
    )
}
