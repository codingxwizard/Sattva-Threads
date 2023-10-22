import React from 'react'
import { TailSpin } from 'react-loader-spinner'
export default function Loader({ w, h, m, c }) {
    return (
        <div className={`w-full flex justify-center my-${m}`}><TailSpin color={c} width={w} height={h} /></div>
    )
}
