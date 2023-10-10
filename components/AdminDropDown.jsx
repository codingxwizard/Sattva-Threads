import { useEffect, useRef, useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';

export default function AdminDropDown() {
    const buttonRef = useRef(null);
    const arrowRef = useRef(null);
    const menuRef = useRef(null);
    const [hide, setHide] = useState(true);
    const [currValue, setCurrValue] = useState("Select Parent Category");
    const [cateogries, setCateogries] = useState([{ name: "Select Parent Category" }, { name: "A" }, { name: "B" }, { name: "C" }, { name: "D" }, { name: "E" }, { name: "E" }, { name: "E" }, { name: "E" }, { name: "E" }, { name: "E" }])

    const handleDropDown = () => {
        arrowRef.current.style.transform = "rotate(180Deg)";
        setHide(false);
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && buttonRef.current && !buttonRef.current.contains(event.target)) {
            arrowRef.current.style.transform = "rotate(0Deg)";
            menuRef.current.style.animation = "dropDownDisappear 0.3s ease-in-out";
            setTimeout(() => {
                setHide(true);
            }, 250);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleDropDown]);

    return (
        <div className='flex flex-col relative w-1/2'>
            <button ref={buttonRef} onClick={handleDropDown} className='w-full border flex justify-between items-center font-light text-slate-700 focus:outline-none focus:border-primary rounded border-slate-300 p-2 px-3 text-lg'>
                {currValue}
                <span ref={arrowRef} className='transition-transform'><SlArrowDown /></span>
            </button>
            {!hide && <div ref={menuRef} className='absolute max-h-60 overflow-y-auto flex w-full drop-down-appear flex-col top-full my-3 border border-slate-300 bg-white rounded'>
                {cateogries.length !== 0 && cateogries.map(category => {
                    return <button onClick={() => setCurrValue(category.name)} className='p-3 hover:bg-red-100 rounded text-center'>{category.name}</button>;
                })}
            </div>}
        </div>
    )
}
