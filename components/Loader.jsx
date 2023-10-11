import React from 'react'
import { TailSpin } from 'react-loader-spinner'
export default function Loader() {
    return (
        <div className='w-full flex justify-center'><TailSpin color='white' width={40} height={40}  /></div>
    )
}
