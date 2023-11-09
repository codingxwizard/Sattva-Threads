'use client';
import DialogBox from '@components/DialogBox';
import Layout from '@components/Layout';
import { UserContext } from '@contexts/UserContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Result } from 'postcss';
import React, { useContext, useEffect, useState } from 'react';
import { BiLogoInstagramAlt, BiLogoFacebookCircle, BiLogoPinterest } from 'react-icons/bi';
import { HiMinus, HiPlus } from 'react-icons/hi2';


export default function product() {
    const router = useRouter();
    const { id } = router.query;
    const { user, setUser, userId } = useContext(UserContext);
    const [isDialog, setIsDialog] = useState(false);
    const [text, setText] = useState('');
    // const [product, setProduct] = useState({ images: [], name: "", offerPrice: "" })
    const [product, setProduct] = useState({ images: [], name: "", offerPrice: "" });

    const fetchProducts = async ({ queryKey }) => {
        const res = await axios.get(`/api/products/${id}`);
        if (res.status !== 200)
            return new Error("Error fetching product details");
        return res.data;
    }

    const { isLoading, data } = useQuery([`products: ${id}`], fetchProducts);
    useEffect(() => {
        data && setProduct(data);
    }, [data])

    const handleCart = async () => {
        if (!userId) {
            setText("Please Login first");
            setIsDialog(true);
            return;
        }
        let data;
        setUser(user => {
            user.cartItems.push(id);
            data = user;
            return user;
        })
        try {
            const res = await axios.put(`/api/user/cart/${userId}`, data);
            setText("Product Added to Cart");
            setIsDialog(true);
        } catch (error) {
            console.error(error);
        }
    }

    if (isLoading)
        return <Layout>
            <section className='my-10 flex justify-center gap-8'>
                <aside className='w-[6%] flex flex-col gap-2 items-center'>
                    <div className='h-24 bg-slate-200 pulse w-full object-contain rounded' />
                    <div className='h-24 bg-slate-200 pulse w-full object-contain rounded' />
                    <div className='h-24 bg-slate-200 pulse w-full object-contain rounded' />
                    <div className='h-24 bg-slate-200 pulse w-full object-contain rounded' />
                </aside>
                <div className='w-[30%] h-[400px] bg-slate-200 pulse rounded' />
                <aside className='w-[30%] flex flex-col gap-4'>
                    <div className='h-[30px] w-full bg-slate-200 pulse rounded' />
                    <div className='text-sm flex w-full flex-col gap-5'>
                        <div className='h-[20px] w-3/4 bg-slate-200 pulse rounded' />
                        <div className='flex flex-col w-full gap-2'>
                            <div className='bg-slate-200 h-4 pulse rounded w-[120px]' />
                            <ul className='px-5 text-[#6A6A6A] flex flex-col gap-2 w-full font-light'>
                                <div className='mr-2 bg-slate-200 pulse rounded w-2/3 h-4' />
                                <div className='mr-2 bg-slate-200 pulse rounded w-2/3 h-4' />
                                <div className='mr-2 bg-slate-200 pulse rounded w-2/3 h-4' />
                                <div className='mr-2 bg-slate-200 pulse rounded w-2/3 h-4' />
                            </ul>
                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <div className='bg-slate-200 h-4 pulse rounded w-[120px]' />
                            <ul className='px-5 text-[#6A6A6A] flex flex-col gap-2 w-full font-light'>
                                <div className='mr-2 bg-slate-200 pulse rounded w-2/3 h-4' />
                                <div className='mr-2 bg-slate-200 pulse rounded w-2/3 h-4' />
                            </ul>
                        </div>
                        <div className='h-[20px] w-1/4 bg-slate-200 pulse rounded' />
                        <div className='flex flex-col gap-4 text-base text-[#6A6A6A]'>
                            <div className='flex justify-between'>
                                <div className='h-[20px] w-1/4 bg-slate-200 pulse rounded' />
                                <div className='h-[20px] w-1/4 bg-slate-200 pulse rounded' />
                            </div>
                            <div className='flex gap-3'>
                                <div className='bg-slate-200 pulse rounded w-14 h-14' />
                                <div className='bg-slate-200 pulse rounded w-14 h-14' />
                                <div className='bg-slate-200 pulse rounded w-14 h-14' />
                                <div className='bg-slate-200 pulse rounded w-14 h-14' />
                                <div className='bg-slate-200 pulse rounded w-14 h-14' />
                            </div>
                            <div className='bg-slate-200 pulse rounded w-40 h-16' />
                            <div className='bg-slate-200 pulse rounded w-full h-16' />
                        </div>
                    </div>
                </aside>
            </section>
        </Layout>

    return (
        <Layout>
            <section className='my-10 flex justify-center gap-8'>
                {/* <aside className='w-[10%] flex flex-col gap-2 items-center'>
                    <img src={"/" + product.images[0]} className='h-20 w-fit object-contain rounded' alt="" />
                    <img src={"/" + product.images[0]} className='h-20 w-fit object-contain rounded' alt="" />
                    <img src={"/" + product.images[0]} className='h-20 w-fit object-contain rounded' alt="" />
                </aside> */}
                <aside className='w-[30%]'>
                    <img src={product.images[0]} className='object-contain rounded w-fit' alt="" />
                </aside>
                {isDialog && <DialogBox setIsDialog={setIsDialog} text={text} />}
                <aside className='w-[30%] flex flex-col gap-10'>
                    <div>
                        <h3 className='text-[#99242A] text-lg'>{product.name || "Fog Beige Woven Saree With Embroidery and Hand Work Detailing"}</h3>
                        <p className='text-green-600 text-lg'>&#x20b9;{product.offerPrice || 1999}</p>
                    </div>
                    <div className='text-sm flex flex-col gap-5'>
                        <h3 className='text-lg text-[#99242A]'>Product will be dispatched in 7-10 Days</h3>
                        <div className='flex flex-col gap-1'>
                            <h4 className='text-[#6A6A6A] text-base'>Description</h4>
                            <ul className='px-5 text-[#6A6A6A] font-light'>
                                <li>- Full set includes top, bottom and dupatta</li>
                                <li>- Color: Beige and light blue</li>
                                <li>- Lace Detailing on top and Dupatta</li>
                                <li>- Handwork Detailing on Top</li>
                                <li>- Top-Viscose Chanderi</li>
                                <li>- Bottom-Cotton Satin</li>
                                <li>- Dupatta-Viscose Chanderi</li>
                                <li>- With Lining</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h4 className='text-[#6A6A6A] text-base'>Care</h4>
                            <ul className='px-5 text-[#6A6A6A] font-light'>
                                <li>Dry Clean Only</li>
                                <li>Product color may slightly vary due to photographic lighting sources on your monitor setting</li>
                            </ul>
                        </div>
                        <div className='text-[#6A6A6A] text-base my-2 flex gap-4'>
                            <button>Share</button>
                            <div className='flex gap-2'>
                                <BiLogoFacebookCircle className='w-5 h-5 hover:text-[#99242A] cursor-pointer' />
                                <BiLogoInstagramAlt className='w-5 h-5 hover:text-[#99242A] cursor-pointer' />
                                <BiLogoPinterest className='w-5 h-5 hover:text-[#99242A] cursor-pointer' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 text-base text-[#6A6A6A]'>
                            {/* <div className='flex justify-between'>
                                <h4>Size :</h4>
                                <h4 className='underline'>Size Chart</h4>
                            </div>
                            <div className='flex gap-3'>
                                <div className='border border-slate-300 p-2 px-3'>S</div>
                                <div className='border border-slate-300 p-2 px-3'>M</div>
                                <div className='border border-slate-300 p-2 px-3'>L</div>
                                <div className='border border-slate-300 p-2 px-3'>XL</div>
                                <div className='border border-slate-300 p-2 px-3'>XXL</div>
                            </div> */}
                            {/* <div className='border flex text-base font-light items-center border-slate-300 gap-5 p-2 px-3 w-fit'>
                                <HiMinus />
                                <span className='text-lg'>1</span>
                                <HiPlus />
                            </div> */}
                            <button onClick={handleCart} className='p-3 hover:bg-primaryHover bg-[#99242A] text-white font-light text-lg tracking-wider'>ADD TO CART</button>
                        </div>
                    </div>
                </aside>
            </section>
        </Layout>
    )
}
