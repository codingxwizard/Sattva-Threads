import CartItem from '@components/CartItem';
import Layout from '@components/Layout'
import { useRouter } from 'next/router'
import React from 'react'

export default function index() {
    const collections = [
        {
            id: 1,
            name: "Fresh New Arrivals",
            image: "collection1.png",
            rating: 3,
            offerPrice: 5300,
            price: 10000
        }, {
            id: 2,
            name: "Banarsi Collection",
            image: "collection2.png",
            rating: 3,
            offerPrice: 5300,
            price: 10000
        }, {
            id: 3,
            name: "Linen Collection",
            image: "collection3.png",
            rating: 3,
            offerPrice: 5300,
            price: 10000
        }, {
            id: 4,
            name: "Sambalpuri Collection",
            image: "collection4.png",
            rating: 3,
            offerPrice: 5300,
            price: 10000
        }, {
            id: 5,
            name: "Baluchari Collection",
            image: "collection5.png",
            rating: 3,
            offerPrice: 5300,
            price: 10000
        }, {
            id: 6,
            name: "Katha Stitch Collection",
            image: "collection6.png",
            rating: 3,
            offerPrice: 5300,
            price: 10000
        }]
    return (
        <Layout>
            <section className='flex flex-col gap-4 p-14'>
                <h1 className='font-light text-primary mb-5'>Products</h1>
                <section className='border border-red-400 rounded flex flex-col shadow-[0_0_8px] shadow-slate-300'>
                    {collections.map(c => {
                        return <CartItem key={c.id} cartDetails={c} />
                    })}
                </section>
            </section>
        </Layout>
    )
}
