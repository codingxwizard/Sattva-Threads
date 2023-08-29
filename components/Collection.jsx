import React from 'react'

export default function Collection() {
    const collections = [
        {
            name: "Fresh New Arrivals",
            image: "collection1.png"
        }, {
            name: "Banarsi Collection",
            image: "collection2.png"
        }, {
            name: "Linen Collection",
            image: "collection3.png"
        }, {
            name: "Sambalpuri Collection",
            image: "collection4.png"
        }, {
            name: "Baluchari Collection",
            image: "collection5.png"
        }, {
            name: "Katha Stitch Collection",
            image: "collection6.png"
        }]
    return (
        <section className='grid grid-cols-3 gap-5 w-full font-light flex-wrap px-10'>
            {collections.map(collection => {
                return <div className='relative w-full rounded text-[#363636] overflow-hidden hover:text-[#99242A] hover:font-normal h-[500px]'>
                    {/* <div className='absolute w-full h-full bg-black opacity-20'></div> */}
                    <img src={collection.image} className='w-full hover:scale-105 transition-transform duration-300 h-full' alt="" />
                    <div className='absolute bottom-0 m-8 flex flex-col gap-2'>
                        <h3 className='text-base text-white font-normal'>{collection.name.toUpperCase()}</h3>
                        <button className='p-3 px-4 text-sm bg-white'>VIEW PRODUCTS</button>
                    </div>
                </div>
            })}
        </section>
    )
}
