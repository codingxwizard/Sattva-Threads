import Layout from '@components/Layout';
import { useRouter } from 'next/router'
import React from 'react'
import { BiLogoInstagramAlt, BiLogoFacebookCircle, BiLogoPinterest } from 'react-icons/bi';
import { HiMinus, HiPlus } from 'react-icons/hi2'


export default function product() {
    const router = useRouter();
    const { id } = router.query;
    const products = [
        {
            id: 1,
            image: "saari1.png",
            name: "Yellow Woven saree With Delicate Hand Work Detailing",
            price: 5366
        },
        {
            id: 2,
            image: "saari2.png",
            name: "Fog Beige Woven Zari saree With Delicate Embroidery Detailing",
            price: 5366
        },
        {
            id: 3,
            image: "kurti1.png",
            name: "Fog Beige Woven saree With Embroidery and Hand Work Detailing",
            price: 4860
        },
        {
            id: 4,
            image: "kurti2.png",
            name: "Beige and Pink Woven saree With Delicate Hand Work Detailing",
            price: 5366
        }
    ]
    const product = products.find(p => p.id.toString() === id);
    console.log(product)
    return (
        <Layout>
            <section className='my-10 flex justify-center gap-8'>
                <aside className='w-[10%] flex flex-col gap-2 items-center'>
                    <img src={"/" + product?.image} className='h-20 w-fit object-contain rounded' alt="" />
                    <img src={"/" + product?.image} className='h-20 w-fit object-contain rounded' alt="" />
                    <img src={"/" + product?.image} className='h-20 w-fit object-contain rounded' alt="" />
                </aside>
                <aside className='w-[30%]'>
                    <img src={"/" + product?.image} className='object-contain rounded w-fit' alt="" />
                </aside>
                <aside className='w-[30%] flex flex-col gap-10'>
                    <div>
                        <h3 className='text-[#99242A] text-lg'>{product?.name}</h3>
                        <p className='text-green-600 text-lg'>&#x20b9;{product?.price}</p>
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
                            <div className='flex justify-between'>
                                <h4>Size :</h4>
                                <h4 className='underline'>Size Chart</h4>
                            </div>
                            <div className='flex gap-3'>
                                <div className='border border-slate-300 p-2 px-3'>S</div>
                                <div className='border border-slate-300 p-2 px-3'>M</div>
                                <div className='border border-slate-300 p-2 px-3'>L</div>
                                <div className='border border-slate-300 p-2 px-3'>XL</div>
                                <div className='border border-slate-300 p-2 px-3'>XXL</div>
                            </div>
                            <div className='border flex text-base font-light items-center border-slate-300 gap-5 p-2 px-3 w-fit'>
                                <HiMinus />
                                <span className='text-lg'>1</span>
                                <HiPlus />
                            </div>
                            <button className='p-2 bg-[#99242A] text-white font-light text-lg tracking-wider'>ADD TO CART</button>
                        </div>
                    </div>
                </aside>
            </section>
        </Layout>
    )
}
