'use client';
import Layout from '@components/Layout'
import Loader from '@components/Loader';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { PiNotePencilLight, PiTrashSimpleLight } from 'react-icons/pi';
import { CiSaveUp2 } from 'react-icons/ci';
import DialogBox from '@components/DialogBox';

export default function backgrounds() {
    const [backgrounds, setBackgrounds] = useState([]);
    const [text, setText] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isDialog, setIsDialog] = useState(false);
    const handleRemove = async (bId) => {
        setBackgrounds(prev => {
            let bg = [...prev];
            bg = bg.filter(b => b.id.toString() !== bId);
            return bg;
        });
        try {
            const data = backgrounds.find(b => b.id.toString() === bId);
            await axios.delete('/api/backgrounds/' + bId, data);
            setText("Background Successfully Delete!")
            setIsDialog(true);

        } catch (error) {
            console.error(error);
        }
    }

    const fetchBackgrounds = async () => {
        try {
            const res = await axios.get('/api/backgrounds');
            setBackgrounds(res.data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchBackgrounds();
    }, []);

    const handleSave = async (bId) => {
        try {
            if (bId.length !== 24) {
                const data = await backgrounds.find(b => b.id === bId);
                await axios.post('/api/backgrounds', data);
            }
            else {
                await axios.put('/api/backgrounds/' + bId, backgrounds.find(b => b.id === bId));
            }
            setText("Background Successfully Saved!")
            setIsDialog(true);
        } catch (error) {
            console.error(error);
        }

    }
    const handleReset = async () => {
        fetchBackgrounds();
    }

    return (
        <Layout>
            <section className='lg:p-14 md:p-10 sm:p-8 p-4 flex flex-col gap-2 mx-auto lg:w-3/4 w-full'>
                <h1 className='text-center text-primary'>Backgrounds</h1>
                <p className='text-center text-slate-600 text-lg'>{backgrounds.length} Entries</p>
                {isDialog && <DialogBox setIsDialog={setIsDialog} text={text} />}
                {!isLoading ? backgrounds.length !== 0 ? backgrounds.map((background, index) => {
                    const handleChange = async (e) => {
                        const file = await convertToBase64(e.target.files[0]);
                        setBackgrounds((prev) => {
                            const bg = [...prev];
                            const b = bg.find(b => b.id === background.id);
                            b.image = file;
                            return bg;
                        })
                    }
                    return <div key={index} className='flex sm:flex-row sm:w-full w-fit m-auto flex-col h-[200px] my-4 sm:gap-4 gap-2 object-contain items-center border border-slate-400 rounded md:p-3 p-2 md:px-4 justify-between'>
                        {(background.image)
                            ? <img src={background.image} className='sm:h-full h-[75%] w-fit object-contain object-left rounded' alt="" />
                            : <div className='flex w-1/2 rounded items-center justify-center text-slate-700 text-lg'>
                                No Image
                            </div>}
                        <div className='flex sm:flex-col flex-row w-fit justify-center gap-2'>
                            <input type="file" accept='.jpg, .jpeg, .png' id={`image-${background.id}`} className='hidden' onChange={handleChange} />
                            <label htmlFor={`image-${background.id}`} className='flex items-center w-full md:text-lg text-sm border border-slate-400 rounded font-light sm:p-2 p-1 sm:px-3 px-2 gap-2 text-slate-700 hover:border-green-600 hover:text-green-600'><PiNotePencilLight className='md:w-7 w-6 md:h-7 h-6' /> Change</label>
                            <button onClick={() => handleRemove(background.id)} className='flex w-full items-center md:text-lg text-sm border border-slate-400 rounded font-light sm:p-2 p-1 sm:px-3 px-2 gap-2 text-slate-700 hover:border-red-600 hover:text-red-600'><PiTrashSimpleLight className='md:w-7 w-6 md:h-7 h-6' /> Remove</button>
                            <button onClick={() => handleSave(background.id)} className='flex w-full items-center md:text-lg text-sm border border-slate-400 rounded font-light sm:p-2 p-1 sm:px-3 px-2 gap-2 text-slate-700 hover:border-red-600 hover:text-red-600'><CiSaveUp2 className='md:w-7 w-6 md:h-7 h-6' /> Save</button>
                        </div>
                    </div>
                }) : <div className='border border-red-500 rounded p-4 text-xl text-center my-4 font-thin text-primary'>No Backgrounds</div>
                    : <Loader h={40} w={40} c="red" m={10} />}
                <button onClick={() => setBackgrounds([...backgrounds, { id: backgrounds.length + 1, image: "" }])} className='border w-fit border-slate-400 p-2 px-3 rounded text-lg text-slate-600'>New Background</button>
            </section>
        </Layout >
    )
}
function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    })
}