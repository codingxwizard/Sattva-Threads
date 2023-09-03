import React from 'react'

export default function Input({ name, setInput, input, type }) {

    return (
        <input className='focus:outline-none rounded p-2 border border-slate-400 placeholder- text-secondary w-full' onChange={e => setInput(e.target.value)} value={input} type={type} placeholder={name} />
    )
}
