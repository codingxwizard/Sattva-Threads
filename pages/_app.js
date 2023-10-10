import '@styles/globals.css'
import Head from 'next/head'
import { UserState } from "@contexts/UserContext"
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return <>
    <SessionProvider session={session}>
      <UserState>
        <Head>
          <title>Sattva Threads</title>
        </Head>
        <Component {...pageProps} />
      </UserState>
    </SessionProvider>
  </>
}
