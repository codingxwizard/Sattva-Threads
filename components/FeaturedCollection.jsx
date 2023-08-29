import React from 'react'
import Product from './Product';

export default function FeaturedCollection() {

    const products = {
        saari: [
            {
                image: "saari1.png",
                name: "Yellow Woven saree With Delicate Hand Work Detailing",
                price: 5366
            },
            {
                image: "saari2.png",
                name: "Fog Beige Woven Zari saree With Delicate Embroidery Detailing",
                price: 5366
            }
        ],
        kurti: [
            {
                image: "kurti1.png",
                name: "Fog Beige Woven saree With Embroidery and Hand Work Detailing",
                price: 4860
            },
            {
                image: "kurti2.png",
                name: "Beige and Pink Woven saree With Delicate Hand Work Detailing",
                price: 5366
            }
        ]
    }

    return (
        <section className='text-[#99242A] font-light items-center flex-col flex gap-5'>
            <h1 className='text-4xl'>Featured Collections</h1>
            <section className='flex w-full gap-8 px-10'>
                <section className='w-1/2 flex flex-col gap-4'>
                    <h2 className='text-center text-2xl'>Saari</h2>
                    <div className='flex gap-4'>
                        {
                            products.saari.map((p, index) => {
                                return <Product key={index} detail={p} />;
                            })
                        }
                    </div>
                </section>
                <section className='w-1/2 flex flex-col gap-4'>
                    <h2 className='text-center text-2xl'>Kurti & Suit</h2>
                    <div className='flex gap-4'>
                        {
                            products.kurti.map((p, index) => {
                                return <Product key={index} detail={p} />;
                            })
                        }
                    </div>
                </section>
            </section>
            <button className='p-3 px-4 bg-[#99242A] text-white w-fit'>View All Products</button>
        </section>
    )
}
