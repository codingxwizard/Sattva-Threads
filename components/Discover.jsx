import { useEffect, useRef, useState } from 'react';

export default function Discover() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
  
    const scrollToCenter = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = containerWidth / 4;
        const centerIndex = Math.floor(4 / 2);
        const scrollX =
          centerIndex * itemWidth - containerWidth / 2 + itemWidth / 2;
        containerRef.current.scroll({
          left: scrollX,
          behavior: 'smooth',
        });
      }
    };
  
    useEffect(() => {
      scrollToCenter();
    }, [currentIndex]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 4 - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, [3000]);
  
    const handleItemClick = (index) => {
      setCurrentIndex(index);
    };

    return (
        <section className='w-full flex flex-col gap-10 items-center p-10 pb-16 font-light bg-[#EFEFEF] text-primary'>
            <h1>Discover More</h1>
            <section ref={containerRef} className='flex no-scrollbar items-center overflow-x-auto gap-10'>
                <img onClick={() => handleItemClick(0)} src="discover1.png" className={`rounded w-3/4 h-96`} alt="" />
                <img onClick={() => handleItemClick(1)} src="discover2.png" className={`rounded w-3/4 h-96`} alt="" />
                <img onClick={() => handleItemClick(2)} src="collection2.png" className={`rounded w-3/4 h-96`} alt="" />
                <img onClick={() => handleItemClick(3)} src="collection4.png" className={`rounded w-3/4 h-96`} alt="" />
            </section>
        </section>
    )
}
