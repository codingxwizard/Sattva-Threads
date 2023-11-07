import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Background from '@components/Background';
import Collection from '@components/Collection';
import Discover from '@components/Discover';
import FeaturedCollection from '@components/FeaturedCollection';
import FeaturedProduct from '@components/FeaturedProduct';
import Footer from '@components/Footer';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import Shop from '@components/Shop';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});



export default function index() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className='w-full min-h-screen'>
        <Layout>
          <section className='flex flex-col gap-10'>
            <Background />
            <FeaturedCollection />
            <Collection />
            {/* <Discover /> */}
            <FeaturedProduct />
            <Shop />
          </section>
        </Layout>
      </main>
    </QueryClientProvider>
  )
}
