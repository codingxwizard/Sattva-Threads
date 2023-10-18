import Layout from '@components/Layout'
import Loader from '@components/Loader';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { PiEyeLight, PiNotePencilLight, PiTrashSimpleLight } from 'react-icons/pi';

export default function index() {

    const [products, setProducts] = useState([{ id: 1, images: [], name: 'hello', offerPrice: 454, type: 'saree' }]);
    const [isLoader, setIsLoader] = useState(false);
    const Router = useRouter();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('/api/products');
                setProducts(res.data);
                console.log(res.data)
                setIsLoader(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [])

    return (
        <Layout>
            <section className='p-10 lg:px-14 md:px-10 sm:px-8 px-4 font-light flex flex-col gap-2'>
                <h1 className='text-center text-primary'>Products</h1>
                <p className='text-slate-600 text-center text-lg'>{products.length} Entries</p>
                <table className='border mt-5 border-slate-800 overflow-scroll rounded'>
                    <thead className='bg-red-50'>
                        <tr>
                            <th className='head'>Images</th>
                            <th className='head'>Name</th>
                            <th className='head'>Offer Price</th>
                            <th className='head'>Type</th>
                            <th className='head'>Edit</th>
                            <th className='head'>View</th>
                            <th className='head'>Remove</th>
                        </tr>
                    </thead>
                    <tbody className='text-slate-700'>
                        {!isLoader && products.length !== 0 ? products.map(product => {
                            console.log(product)
                            return <tr key={product.id}>
                                <td className='tele w-1/5'><img src={product.images[0]} className='w-20 h-20 m-auto object-contain' alt="" /></td>
                                <td className='tele w-1/5'>{product.name}</td>
                                <td className='tele w-1/5'>{product.offerPrice}</td>
                                <td className='tele w-1/5'>{product.type}</td>
                                <td onClick={() => Router.push(`/admin/product/${product.id}`)} className='w-[6.6%] tele'><PiNotePencilLight className='cursor-pointer w-6 h-6 hover:text-green-700 text-slate-600 m-auto' /></td>
                                <td className='w-[6.6%] tele'><PiEyeLight className='cursor-pointer w-6 h-6 hover:text-blue-700 text-slate-600 m-auto' /></td>
                                <td className='w-[6.6%] tele'><PiTrashSimpleLight className='cursor-pointer w-6 h-6 hover:text-red-700 text-slate-600 m-auto' /></td>
                            </tr>;
                        })
                            : <tr></tr>}
                    </tbody>
                </table>
                {isLoader && <Loader />}
                <button onClick={() => Router.push('/admin/products/add')} className='p-2 px-3 rounded bg-primary hover:bg-primaryHover w-fit text-white my-5'>Add Products</button>
            </section>
        </Layout>
    )
}
