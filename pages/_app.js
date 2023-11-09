'use client';
import '@styles/globals.css';
import Head from 'next/head';
import { UserState } from "@contexts/UserContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App({ Component, pageProps: { session, ...pageProps } }) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  return <QueryClientProvider client={queryClient}>
    <UserState>
      <Head>
        <title>Sattva Threads</title>
      </Head>
      <Component {...pageProps} />
    </UserState>
  </QueryClientProvider>
}
