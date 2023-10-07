import Background from '@components/Background';
import Collection from '@components/Collection';
import Discover from '@components/Discover';
import FeaturedCollection from '@components/FeaturedCollection';
import FeaturedProduct from '@components/FeaturedProduct';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import Shop from '@components/Shop';
import { IoLogoWhatsapp } from 'react-icons/io';

export default function index() {
  return (
    <main className='w-full min-h-screen flex flex-col gap-10'>
      <Navbar />
      <Background />
      <FeaturedCollection />
      <IoLogoWhatsapp className='fixed z-50 right-0 top-1/2 w-10 h-10 text-green-600 p-1 hover:scale-110 transition-transform rounded mr-5 mb-5 bg-slate-100'/>
      <Collection />
      <Discover />
      <FeaturedProduct />
      <Shop />
      <Footer />
    </main>
  )
}
