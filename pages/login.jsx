'use client';
import Input from '@components/Input'
import Layout from '@components/Layout'
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import Loader from '@components/Loader';
import { useRouter } from 'next/router';
import { UserContext } from '@contexts/UserContext';

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoader, setIsLoader] = useState(false);
    const [mesg, setMesg] = useState('');
    const router = useRouter();
    const { setUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMesg('');
        setIsLoader(true);
        try {
            const res = await axios.post('/api/user/login', { email, password });
            setIsLoader(false);
            if (typeof window !== 'undefined') {
                const { localStorage } = window;
                localStorage.setItem("userId", res.data.id);
            } setUser(res.data);
            router.push('/');
        } catch (error) {
            setMesg(error.response.data)
            setIsLoader(false);
        }
    }
    return (    
        <Layout>
            <form onSubmit={handleSubmit} className='flex font-light my-10 gap-2 flex-col items-center'>
                <h1 className='text-primary'>Login</h1>
                <h4 className='sm:text-base text-center text-sm text-secondary'>Please enter your e-mail and password</h4>
                <section className='my-5 lg:w-[20%] md:w-[30%] sm:w-[40%] w-[80%] flex flex-col gap-3'>
                    <Input type='text' name="Email" input={email} setInput={setEmail} />
                    <Input type='password' name="Password" input={password} setInput={setPassword} />
                    <p className='text-right cursor-pointer hover:underline text-secondary'>forgot password?</p>
                    <p className='text-center text-primary'>{mesg}</p>
                    <button type='submit' className='p-2 full rounded text-lg bg-primary hover:bg-primaryHover tracking-wider text-white'>{!isLoader ? 'LOGIN' : <Loader h={25} w={25} m={0} c="white" />}</button>
                    <p className='text-center text-secondary'>Don't have an account? <Link href="/signup" className='hover:text-primary hover:underline cursor-pointer'>Create one</Link></p>
                </section>
                {/* <div onClick={() => signIn('google')} className='flex items-center gap-2 p-2 px-3 cursor-pointer rounded hover:bg-slate-100 border border-slate-400'>
                    <FcGoogle className='w-8 h-8 rounded box-content' />
                    <p className='text-lg text-slate-700'>Continue with Google</p>
                </div> */}
            </form>
        </Layout>
    )
}
