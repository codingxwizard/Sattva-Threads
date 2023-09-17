import React from 'react'
import { TailSpin } from 'react-loader-spinner'
export default function Loader() {
    return (
        <div className='w-full flex justify-center my-10'><TailSpin color='#d00' width={40} height={40}  /></div>
    )
}
