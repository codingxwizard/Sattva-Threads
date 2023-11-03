'use client';
import '@styles/globals.css';
import Head from 'next/head';
import { UserState } from "@contexts/UserContext";

export default function App({ Component, pageProps: { session, ...pageProps } }) {

  return <>
    <UserState>
      <Head>
        <title>Sattva Threads</title>
      </Head>
      <Component {...pageProps} />
    </UserState>
  </>
}
