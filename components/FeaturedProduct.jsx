import React from 'react';
import { BiLogoInstagramAlt, BiLogoFacebookCircle, BiLogoPinterest } from 'react-icons/bi';
import DropDown from './DropDown';
import { useRouter } from 'next/router';

export default function FeaturedProduct() {
    const Router = useRouter();
    return (
        <section className='flex flex-col md:gap-10 gap-4 px-6 text-primary font-light items-center'>
            <h1>Featured Product</h1>
            <section className='flex flex-col md:flex-row gap-5'>
                <img src="fproduct1.png" className='md:h-96 md:w-auto w-full object-contain rounded' alt="" />
                <section className='flex flex-col md:w-[35%] w-full gap-3'>
                    <h4 className='text-lg'>Sattva Threads</h4>
                    <h3>Fog Beige Woven Saree With Embroidery and Hand Work Detailing</h3>
                    <p className='text-green-600'>&#x20b9;4,860</p>
                    <hr className='border border-slate-200' />
                    <div className='text-[#6A6A6A] my-2 flex gap-4'>
                        <button>Share</button>
                        <div className='flex gap-2'>
                            <BiLogoFacebookCircle className='w-5 h-5 hover:text-primary cursor-pointer' />
                            <BiLogoInstagramAlt className='w-5 h-5 hover:text-primary cursor-pointer' />
                            <BiLogoPinterest className='w-5 h-5 hover:text-primary cursor-pointer' />
                        </div>
                    </div>
                    <DropDown name="Size" value="S" />
                    <button className='p-3 my-2 text-lg tracking-wide text-[#6A6A6A] hover:text-inherit border hover:border-primary border-slate-300 rounded'>ADD TO CART</button>
                    <button className='text-left text-[#6A6A6A] underline underline-offset-[3px] hover:text-inherit'>View more details</button>
                </section>
            </section>
        </section>
    )
}
