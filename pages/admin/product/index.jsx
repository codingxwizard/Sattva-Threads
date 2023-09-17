import Layout from '@components/Layout'
import Loader from '@components/Loader';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PiEyeLight, PiNotePencilLight, PiTrashSimpleLight } from 'react-icons/pi';

export default function index() {

    const [products, setProducts] = useState([{ images: [], name: 'hello', offerPrice: 454, type: 'saree' }]);
    const [isLoader, setIsLoader] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('/api/products');
                setProducts(res.data);
                setIsLoader(false);
            } catch (error) {
                console.error(error);
            }
        }
        // fetchProducts();
    })

    return (
        <Layout>
            <section className='p-10 px-14 font-light flex flex-col gap-2'>
                <h1 className='text-center text-primary'>Products</h1>
                <p className='text-slate-600 text-center text-lg'>10 Entries</p>
                <table className='border mt-5 border-slate-300 w-full rounded'>
                    <thead className='bg-red-50'>
                        <tr>
                            <th>Images</th>
                            <th>Name</th>
                            <th>Offer Price</th>
                            <th>Type</th>
                            <td className='w-[6.25%]'>Edit</td>
                            <td className='w-[6.25%]'>View</td>
                            <td className='w-[6.25%]'>Remove</td>
                        </tr>
                    </thead>
                    <tbody className='text-slate-700'>
                        {!isLoader && products.length !== 0 ? products.map(product => {
                            return <tr key={product.id}>
                                <td><img src={product.images[0]} className='w-20 h-20 m-auto object-contain' alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.offerPrice}</td>
                                <td>{product.type}</td>
                                <td className='w-[6.25%]'><PiNotePencilLight className='cursor-pointer w-7 h-7 hover:text-green-700 text-slate-600 m-auto' /></td>
                                <td className='w-[6.25%]'><PiEyeLight className='cursor-pointer w-7 h-7 hover:text-blue-700 text-slate-600 m-auto' /></td>
                                <td className='w-[6.25%]'><PiTrashSimpleLight className='cursor-pointer w-7 h-7 hover:text-red-700 text-slate-600 m-auto' /></td>
                            </tr>;
                        })
                            : <tr></tr>}
                    </tbody>
                </table>
                {isLoader && <Loader />}
            </section>
        </Layout>
    )
}
