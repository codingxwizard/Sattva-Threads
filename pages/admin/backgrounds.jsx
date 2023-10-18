import Layout from '@components/Layout'
import { useEffect, useRef, useState } from 'react'
import { PiNotePencilLight, PiTrashSimpleLight } from 'react-icons/pi';

export default function backgrounds() {
    const [backgrounds, setBackgrounds] = useState([{ id: 1, img: "bg1.png" }]);
    const handleRemove = () => {
        setBackgrounds(prev => {
            const bg = [...prev];
            bg.pop();
            return bg;
        });
    }

    return (
        <Layout>
            <section className='lg:p-14 md:p-10 sm:p-8 p-4 flex flex-col gap-2 mx-auto md:w-2/3 w-full'>
                <h1 className='text-center text-primary'>Backgrounds</h1>
                <p className='text-center text-slate-600 text-lg'>{backgrounds.length} Entries</p>
                {backgrounds.map((background, index) => {
                    const handleChange = (e) => {
                        setBackgrounds(prev => {
                            const bg = [...prev];
                            console.log(background.id)
                            bg[background.id - 1].img = URL.createObjectURL(e.target.files[0]);
                            return bg;
                        })
                    }
                    return <div key={index} className='flex sm:flex-row flex-col min-h-40 my-4 gap-2 object-contain items-center border border-slate-400 rounded md:p-3 p-2 md:px-4 justify-between'>
                        {(background.img)
                            ? <img src={background.img.includes("http") ? background.img : `/${background.img}`} className='h-full sm:w-[80%] w-full rounded' alt="" />
                            : <div className='flex h-full w-1/2 rounded bg-slate-200 items-center justify-center text-slate-700 text-lg'>
                                <span>No Image</span>
                            </div>}
                        <div className='flex sm:flex-col flex-row w-[20%] justify-center gap-2'>
                            <input type="file" accept='.jpg, .jpeg, .png' id={`image-${background.id}`} className='hidden' onChange={handleChange} />
                            <label htmlFor={`image-${background.id}`} className='flex items-center md:text-lg text-sm border border-slate-400 rounded font-light sm:p-2 p-1 sm:px-3 px-2 gap-2 text-slate-700 hover:border-green-600 hover:text-green-600'><PiNotePencilLight className='md:w-7 w-6 md:h-7 h-6' /> Change</label>
                            <button onClick={handleRemove} className='flex items-center md:text-lg text-sm border border-slate-400 rounded font-light sm:p-2 p-1 sm:px-3 px-2 gap-2 text-slate-700 hover:border-red-600 hover:text-red-600'><PiTrashSimpleLight className='md:w-7 w-6 md:h-7 h-6' /> Remove</button>
                        </div>
                    </div>
                })}
                <button onClick={() => setBackgrounds([...backgrounds, { id: backgrounds.length + 1, img: "" }])} className='border w-fit border-slate-400 p-2 px-3 rounded text-lg text-slate-600'>New Background</button>
            </section>
        </Layout >
    )
}
backgrounds