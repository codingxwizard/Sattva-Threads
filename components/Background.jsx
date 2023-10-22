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

    const handleClick = (index) => {
        caraouselRef.current[index].style.transform = `translateX(-${activeIndex * 100}%)`;
        setActiveIndex(index);
    }

    return (
        // <section className='min-h-screen relative'>
        //     <img src="bg1.png" className='absolute w-full h-full' alt="background" />
        // </section>
        <div className={`lg:min-h-screen relative md:h-[500px] h-[300px] overflow-hidden w-full flex items-center`}>
            {background.map((item, index) => {
                return <div key={index} className={`min-w-full relative h-full flex flex-col`}>
                    <img ref={e => caraouselRef.current[index] = e} src={item.image} className={`transition-transform duration-1000 object-cover w-full h-full absolute`} alt="" />
                    <aside id='headings' className='w-1/2 h-full relative flex flex-col items-start lg:px-20 md:px-14 sm:px-8 px-4 justify-center'>
                    </aside>
                </div>
            })}
            <div className='absolute w-full h-full bg-black opacity-30'></div>
            <ul className='absolute bottom-0 right-0 flex gap-3 m-10'>
                {background.length !== 0 && background.map((c, index) => {
                    return <li key={index} onClick={() => handleClick(index)} className={`w-3 h-3 cursor-pointer rounded-full border-2 border-white ${(index) === activeIndex && "bg-white"}`}></li>
                })}
            </ul>
        </div>
    )
}
