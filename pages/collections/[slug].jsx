import CartItem from '@components/CartItem';
import Layout from '@components/Layout'
import { useRouter } from 'next/router'
import React from 'react'

export default function collection() {
  const { slug } = useRouter().query;
  const heading = String(slug).split('-')
  console.log(heading)
  const collections = [
    {
      id: 1,
      name: "Fresh New Arrivals",
      images: ["collection1.png"],
      rating: 3,
      offerPrice: 5300,
      price: 10000
    }, {
      id: 2,
      name: "Banarsi Collection",
      images: ["collection2.png"],
      rating: 3,
      offerPrice: 5300,
      price: 10000
    }, {
      id: 3,
      name: "Linen Collection",
      images: ["collection3.png"],
      rating: 3,
      offerPrice: 5300,
      price: 10000
    }, {
      id: 4,
      name: "Sambalpuri Collection",
      images: ["collection4.png"],
      rating: 3,
      offerPrice: 5300,
      price: 10000
    }, {
      id: 5,
      name: "Baluchari Collection",
      images: ["collection5.png"],
      rating: 3,
      offerPrice: 5300,
      price: 10000
    }, {
      id: 6,
      name: "Katha Stitch Collection",
      images: ["collection6.png"],
      rating: 3,
      offerPrice: 5300,
      price: 10000
    }]
  return (
    <Layout>
      <section className='flex flex-col md:gap-4 gap-2 lg:p-14 md:p-10 sm:p-8 py-6 p-4'>
        <h1 className='font-light text-primary md:mb-5 mb-2'>{heading[0][0]?.toUpperCase() + heading[0].slice(1,) + " " + (heading[1] ? heading[1] : "")}</h1>
        <section className='border border-red-400 rounded flex flex-col shadow-[0_0_8px] shadow-slate-300'>
          {collections.map(c => {
            return <CartItem key={c.id} cartDetails={c} />
          })}
        </section>
      </section>
    </Layout>
  )
}
