import Background from '@components/Background';
import Collection from '@components/Collection';
import Discover from '@components/Discover';
import FeaturedCollection from '@components/FeaturedCollection';
import FeaturedProduct from '@components/FeaturedProduct';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import Shop from '@components/Shop';
import React from 'react';

export default function index() {
  return (
    <main className='w-full min-h-screen flex flex-col gap-10'>
      <Navbar />
      <Background />
      <FeaturedCollection />
      <Collection />
      <Discover />
      <FeaturedProduct />
      <Shop />
      <Footer />
    </main>
  )
}
