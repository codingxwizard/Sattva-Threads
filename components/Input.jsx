import React from 'react'

export default function Input({ name, setInput, input, type }) {

    const handleChange = (e) => {
        if (name === "Description" || name === "Care")
            setInput(e.target.value.split(','));
        else
            setInput(e.target.value);

    }

    return (
        <input className='focus:outline-none rounded p-2 border border-slate-400 text-secondary w-full' onChange={handleChange} value={input} type={type} placeholder={name} />
    )
}
