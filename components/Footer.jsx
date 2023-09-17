import React from 'react'
import { BiLogoInstagramAlt, BiLogoFacebookCircle, BiLogoPinterest } from 'react-icons/bi';

export default function Footer() {
    const footer = [
        {
            title: "About the Shop",
            desc: "A trusted fashion brand that focuses on ethnic designer apparel with everyday essentials a blend of comfort and innovative designing."
        },
        {
            title: "Support",
            items: ["About Us", "Blogs", "Refund Policy", "Careers", "Shipping and Delivery"]
        },
        {
            title: "Contact",
            items: ["FAQs", "Terms of Service", "Privacy Policy", "Contact Us"]
        },
        {
            title: "Newsletter",
            desc: "Subscribe to receive updates, access to exclusive deals, and more.",
        }
    ]
    return (
        <footer className='bg-[#E9E9E9] h-96 flex-col flex justify-between w-full p-14 py-10 text-secondary font-light'>
            <section className='w-full flex justify-between gap-10'>
                {footer.map((item, index) => {
                    return <div key={index} className='w-full flex flex-col gap-2 text-sm'>
                        <h3 className='text-lg font- text-primary'>{item.title}</h3>
                        {(index === 0 || index === 3)
                            ? <p className='cursor-default'>{item.desc}</p>
                            : <ul className='flex flex-col gap-2'>{item.items.map((i, index) => {
                                return <li key={index} className='hover:underline w-fit cursor-default'>{i}</li>;
                            })}</ul>}
                        {index === 0 && <div className='flex gap-2'>
                            <BiLogoFacebookCircle className='w-6 h-6 hover:text-primary cursor-pointer' />
                            <BiLogoInstagramAlt className='w-6 h-6 hover:text-primary cursor-pointer' />
                            <BiLogoPinterest className='w-6 h-6 hover:text-primary cursor-pointer' />
                        </div>}
                        {index === 3 && <div className='flex flex-col gap-2'>
                            <input type="text" placeholder='Enter Your Email Address' className='w-fit p-2 rounded border border-[#7A7A7A] focus:outline-none text-slate-700 placeholder-[#7A7A7A]' />
                            <button className='p-3 px-4 bg-primary rounded hover:bg-primaryHover text-white w-fit my-2'>SUBSCRIBE</button>
                        </div>}
                    </div>;
                })}
            </section>
            <section className='text-sm'>
                <p className='cursor-default'>&#x24B8; Sattva Threads</p>
                <p className='font-normal hover:underline cursor-pointer'>Created By Coding Wizards</p>
                <p className='font-normal hover:underline cursor-pointer'>Project By DigiFox</p>
            </section>
        </footer>
    )
}
