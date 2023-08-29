import Background from '@components/Background';
import Collection from '@components/Collection';
import FeaturedCollection from '@components/FeaturedCollection';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import React from 'react';

export default function index() {
  return (
    <main className='w-full min-h-screen flex flex-col gap-10'>
      <Navbar />
      <Background />
      <FeaturedCollection />
      <Collection />
      <Footer />
    </main>
  )
}
