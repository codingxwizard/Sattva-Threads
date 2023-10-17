import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { UserContext } from '@contexts/UserContext';
import { useRouter } from 'next/router';

export default function CartItem({ cartDetails }) {
  const Router = useRouter();
  const { user, setChanges, userId, setUser } = useContext(UserContext);
  const currentItem = useRef(null);
  // const [quantity, setQuantity] = useState(1);
  const [quantity, setQuantity] = useState(user.cartItems?.filter(item => item === cartDetails._id).length || 1);
  const handleClick = () => {
    Router.push(`/${cartDetails._id}`)
  }

  const handleRemove = async () => {
    try {
      currentItem.current.style.animation = 'disappearItem 0.7s ease-in-out';
      setTimeout(async () => {
        currentItem.current.style.display = 'none';
      }, 400);
      const res = await axios.put(`/user/cart-remove/${user._id}`, { productId: cartDetails._id })
      setChanges(prev => [prev++]);
    } catch (error) {
      console.error(error)
    }
  }

  const handleIncrease = async () => {
    try {
      const res = await axios.put(`/user/cart-increase/${userId}`, { productId: cartDetails._id });
      setQuantity(prev => [++prev]);
      setUser({ ...user, cartItems: res.data });
    } catch (error) {
      console.error(error);
    }
  }
  const handleDecrease = async () => {
    try {
      const res = await axios.put(`/user/cart-decrease/${userId}`, { productId: cartDetails._id });
      console.log(res.data);
      setQuantity(prev => [--prev]);
      setUser({ ...user, cartItems: res.data });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section ref={currentItem} className='item p-4 rightAppear flex w-full md:h-[200px] h-[150px] gap-4 border-b border-slate-300'>
      <aside className='md:w-[20%] sm:w-[30%] w-[40%] h-full'>
        <img onClick={handleClick} src={"/" + cartDetails.images[0]} className='cursor-pointer w-full imgLoad h-full object-contain rounded' alt="" />
      </aside>
      <aside className='flex flex-col md:gap-2 gap-1'>
        <h3 onClick={handleClick} className='lg:text-xl gap-16 md:text-lg sm:text-base cursor-pointer text-slate-700'>{cartDetails.name || "Fog Beige Woven Saree With Embroidery and Hand Work Detailing"}</h3>
        <span className='flex rounded px-1 bg-green-500 sm:text-base text-sm text-white items-center justify-center gap-1 w-fit'>{cartDetails.rating || 4}<AiFillStar /></span>
        <div className='flex gap-2 items-end'>
          <span className='md:text-lg text-slate-700 font-bold'>&#8377;{quantity * cartDetails.offerPrice || 1999}</span>
        </div>
        {!(Router.pathname.includes('collection') || Router.pathname.includes('products')) && <div className='flex md:gap-5 gap-3'>
          <div className='flex items-center md:gap-3 gap-2 text-base sm:text-lg md:text-xl'>
            <button onClick={handleDecrease} className='bg-blue-500 hover:scale-110 duration-200 transition-transform md:px-4 px-3 md:rounded-md rounded text-white text-base md:text-2xl'>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease} className='bg-blue-500 hover:scale-110 duration-200 transition-transform md:px-4 px-3 md:rounded-md rounded text-white text-base md:text-2xl'>+</button>
          </div>
          <button onClick={handleRemove} className='w-fit hover:bg-red-600 hover:scale-105 transition-transform px-2 md:rounded-md rounded bg-red-500 text-white md:text-base text-sm'>Remove</button>
        </div>}
      </aside>
    </section>
  )
}
