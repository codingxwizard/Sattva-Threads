'use client';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

export default function Background() {

    const [background, setBackground] = useState([])
    const [activeIndex, setActiveIndex] = useState(0);
    const caraouselRef = useRef([]);

    useEffect(() => {
        if (background.length !== 0) {
            const interval = setInterval(() => {
                caraouselRef.current.forEach(element => {
                    element.style.transform = `translateX(-${activeIndex * 100}%)`
                });
                const len = background.length;
                setActiveIndex((activeIndex + 1) % len);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [activeIndex, background]);

    useEffect(() => {
        const fetchBackgrounds = async () => {
            try {
                const res = await axios.get('/api/backgrounds');
                setBackground(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchBackgrounds();
    }, [])

    const fetchBackgrounds = async ({queryKey}) => {
        const result = await fetch(`/api/backgrounds`);
        if (!result.ok) {
            return new Error("Error in fetching the background");
        }
        return result.json();
    }

    const handleClick = (index) => {
        caraouselRef.current[index].style.transform = `translateX(-${activeIndex * 100}%)`;
        setActiveIndex(index);
    }

    return (
        // <section className='relative min-h-screen'>
        //     <img src="bg1.png" className='absolute w-full h-full' alt="background" />
        // </section>
        <div className={`flex overflow-hidden relative items-center w-full lg:min-h-screen md:h-[500px] h-[300px]`}>
            {background.map((item, index) => {
                return <div key={index} className={`flex relative flex-col min-w-full h-full`}>
                    <img ref={e => caraouselRef.current[index] = e} src={item.image} className={`object-cover absolute w-full h-full transition-transform duration-1000`} alt="" />
                    <aside id='headings' className='flex relative flex-col justify-center items-start px-4 w-1/2 h-full lg:px-20 md:px-14 sm:px-8'>
                    </aside>
                </div>
            })}
            <div className='absolute w-full h-full bg-black opacity-30'></div>
            <ul className='flex absolute right-0 bottom-0 gap-3 m-10'>
                {background.length !== 0 && background.map((c, index) => {
                    return <li key={index} onClick={() => handleClick(index)} className={`w-3 h-3 cursor-pointer rounded-full border-2 border-white ${(index) === activeIndex && "bg-white"}`}></li>
                })}
            </ul>
        </div>
    )
}
