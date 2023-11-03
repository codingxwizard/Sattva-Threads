'use client';
import Input from '@components/Input'
import Layout from '@components/Layout'
import Loader from '@components/Loader';
import axios from 'axios';
import React, { useState } from 'react'

export default function product() {
    const [isLoader, setIsLoader] = useState(false);
    const [images, setImages] = useState([]);
    // const [imageScreen, setImageScreen] = useState([]);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState([]);
    const [offerPrice, setOfferPrice] = useState('');
    const [type, setType] = useState('');
    const [mrp, setMrp] = useState('');
    const [size, setSize] = useState('');
    const [care, setCare] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoader(true)
        try {
            const res = await axios.post('/api/products', { images, name, desc, offerPrice, mrp, type, size, care },);
            setIsLoader(false);
        } catch (error) {
            console.log(error);
            setIsLoader(false);
        }
    }

    const handleImageChange = async (e) => {
        const imageFiles = e.target.files;
        for (let i = 0; i < imageFiles.length; i++) {
            const file = await convertToBase64(imageFiles[i]);
            setImages(prev => [...prev, file]);
            // setImageScreen(prev => [...prev, URL.createObjectURL(imageFiles[i])]);
        }
    }

    return (
        <Layout>
            <section className='flex flex-col p-10 gap-10 items-center font-light'>
                <h1 className='text-primary'>ADD PRODUCT</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-[30%]'>
                    <div className='flex h-20 w-full overflow-x-auto gap-2'>
                        {images.length > 0 && images.map((image, index) => {
                            return <img src={image} key={index} className='h-full w-fit rounded object-contain' alt="" />
                        })}
                    </div>
                    <input id='images' className='hidden' accept='.jpg, .jpeg, .png' type="file" onChange={handleImageChange} multiple />
                    <label htmlFor="images" className='border border-primary h-full text-center text-primary p-3 px-4 text-lg rounded'>Upload Images</label>
                    <Input name="Name" input={name} setInput={setName} type="text" />
                    <Input name="Description" input={desc} setInput={setDesc} type="text" />
                    <Input name="Offer Price" input={offerPrice} setInput={setOfferPrice} type="number" />
                    <Input name="Mrp" input={mrp} setInput={setMrp} type="number" />
                    <Input name="Type" input={type} setInput={setType} type="text" />
                    <Input name="Size" input={size} setInput={setSize} type="text" />
                    <Input name="Care" input={care} setInput={setCare} type="text" />
                    <button type='submit' className='p-2 px-3 rounded text-lg bg-primary hover:bg-primaryHover text-white'>{!isLoader ? 'Save' : <Loader h={30} w={30} m={2} c="red" />}</button>
                </form>
            </section>
        </Layout>
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
