import React from 'react';
import { PiCaretDownThin } from 'react-icons/pi';

const DropDown = ({ name, value }) => {
    const dropDownValues = ["S", "M", "L", "XL"];
    return (
        <section className='flex border justify-between items-center text-[#6A6A6A] border-slate-300 relative rounded p-2 px-3'>
            <div className='flex gap-2'>
                <label htmlFor={name}>{name} :</label>
                <p>{value}</p>
            </div>
            <PiCaretDownThin className='h-5 w-5' />
            <div id='name' className='absolute w-full top-full left-0 hidden flex-col items-center gap-2 rounded p-2 px-3 my-2 border border-slate-300'>
                {dropDownValues.map((v, index) => {
                    return <p key={index} className='cursor-pointer hover:text-red-500'>{v}</p>;
                })}
            </div>
        </section>
    )
}

export default DropDown;