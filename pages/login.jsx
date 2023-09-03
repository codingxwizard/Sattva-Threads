import Input from '@components/Input'
import Layout from '@components/Layout'
import Link from 'next/link';
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import Loader from '@components/Loader';
import { useRouter } from 'next/router';

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoader, setIsLoader] = useState(false);
    const [mesg, setMesg] = useState('');
    const router = useRouter();
    const {data: session} = useSession();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMesg('');
        setIsLoader(true);
        try {
            const res = await axios.post('/api/user/login', { email, password });
            setIsLoader(false);
            router.push('/');
        } catch (error) {
            setMesg(error.response.data)
            setIsLoader(false);
        }
    }
    return (
        <Layout>
            <form onSubmit={handleSubmit} className='flex font-light my-10 gap-2 flex-col items-center'>
                <h2 className='text-3xl text-primary'>Login</h2>
                <h4 className='text-secondary'>Please enter your e-mail and password</h4>
                <section className='my-5 w-[20%] flex flex-col gap-3'>
                    <Input type='text' name="Email" input={email} setInput={setEmail} />
                    <Input type='password' name="Password" input={password} setInput={setPassword} />
                    <p className='text-right cursor-pointer hover:underline text-secondary'>forgot password?</p>
                    <p className='text-center text-primary'>{mesg}</p>
                    <button type='submit' className='p-2 full rounded text-lg bg-primary hover:bg-primaryHover tracking-wider text-white'>{!isLoader ? 'LOGIN' : <Loader />}</button>
                    <p className='text-center text-secondary'>Don't have an account? <Link href="/register" className='hover:text-primary hover:underline cursor-pointer'>Create one</Link></p>
                </section>
                <div onClick={() => signIn('google')} className='flex items-center gap-3 p-2 pr-3 cursor-pointer rounded bg-blue-500 border border-slate-400'>
                    <FcGoogle className='w-8 h-8 rounded box-content bg-white p-1' />
                    <p className='font-normal tracking-wider text-lg text-white'>LOG IN WITH GOOGLE</p>
                </div>
            </form>
        </Layout>
    )
}
