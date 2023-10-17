import Input from '@components/Input'
import Layout from '@components/Layout'
import Loader from '@components/Loader';
import { UserContext } from '@contexts/UserContext';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
import { FcGoogle } from 'react-icons/fc';


export default function signup() {
    const [isLoader, setIsLoader] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [mesg, setMesg] = useState('');
    const { setUser } = useContext(UserContext);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMesg('');
        setIsLoader(true);
        try {
            if (password.length < 5) {
                setMesg('Password is too short');
            }
            else if (password !== confirm) {
                setMesg("Password doesn't match!")
            }
            else {
                const res = await axios.post('/api/user/signup', { name, email, password });
                if (typeof window !== 'undefined') {
                    const { localStorage } = window;
                    localStorage.setItem("userId", res.data.id);
                }
                setUser(res.data);
            }
            setIsLoader(false);
            router.push('/')
        } catch (error) {
            setMesg(error.response.data)
            setIsLoader(false);
        }
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit} className='flex font-light my-10 gap-2 flex-col items-center'>
                <h2 className='text-3xl text-primary'>Sign Up</h2>
                <h4 className='text-secondary'>Please fill in the information below:</h4>
                <section className='my-5 w-[20%] flex flex-col gap-3'>
                    <Input type="text" name="Full name" input={name} setInput={setName} />
                    <Input type="text" name="Email" input={email} setInput={setEmail} />
                    <Input type="password" name="Password" input={password} setInput={setPassword} />
                    <Input type="password" name="Confirm Password" input={confirm} setInput={setConfirm} />
                    <p className='text-center text-primary'>{mesg}</p>
                    <button type='submit' className='p-2 full rounded text-lg bg-primary hover:bg-primaryHover my-2 tracking-wider text-white'>{!isLoader ? 'CREATE ACCOUNT' : <Loader />}</button>
                    <p className='text-center text-secondary'>Already have an account? <Link href="/login" className='hover:text-primary hover:underline cursor-pointer'>login</Link></p>
                </section>
                {/* <div onClick={() => signIn('google')} className='flex items-center gap-2 p-2 px-3 cursor-pointer rounded hover:bg-slate-100 border border-slate-400'>
                    <FcGoogle className='w-8 h-8 rounded box-content' />
                    <p className='text-lg text-slate-700'>Continue with Google</p>
                </div> */}
            </form>
        </Layout>
    )
}
