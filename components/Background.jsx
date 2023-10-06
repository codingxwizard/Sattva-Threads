import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export default function Background() {

    const caraousel = ["bg1.png", "bg1.png", "bg1.png"];
    const [activeIndex, setActiveIndex] = useState(0);
    const caraouselRef = useRef([]);

    useEffect(() => {
        const interval = setInterval(() => {
            caraouselRef.current.forEach(element => {
                element.style.transform = `translateX(-${activeIndex * 100}%)`
            });
            setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleClick = (index) => {
        caraouselRef.current[index].style.transform = `translateX(-${activeIndex * 100}%)`;
        setActiveIndex(index);
    }

    return (
        // <section className='min-h-screen relative'>
        //     <img src="bg1.png" className='absolute w-full h-full' alt="background" />
        // </section>
        <div className={`lg:min-h-screen relative md:h-72 sm:h-60 overflow-hidden h-52 w-full flex items-center`}>
            {caraousel.map((item, index) => {
                return <div key={index} className={`min-w-full relative h-full flex flex-col`}>
                    <img ref={e => caraouselRef.current[index] = e} src={`/${item}`} className={`transition-transform duration-1000 object-cover w-full h-full absolute`} alt="" />
                    <aside id='headings' className='w-1/2 h-full relative flex flex-col items-start lg:px-20 md:px-14 sm:px-8 px-4 justify-center'>
                    </aside>
                </div>
            })}
            <div className='absolute w-full h-full bg-black opacity-30'></div>
            <ul className='absolute bottom-0 right-0 flex gap-3 m-10'>
                {caraousel.length !== 0 && caraousel.map((c, index) => {
                    return <li key={index} onClick={() => handleClick(index)} className={`w-3 h-3 cursor-pointer rounded-full border-2 border-white ${index === activeIndex && "bg-white"}`}></li>
                })}
            </ul>
        </div>
    )
}
