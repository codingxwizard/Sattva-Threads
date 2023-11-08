import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@components/Layout'
import Products from '@components/Products';

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
            <Layout>
                <section className='flex flex-col gap-2 p-4 py-6 md:gap-4 lg:p-14 md:p-10 sm:p-8'>
                    <h1 className='mb-2 font-light text-primary md:mb-5'>Products</h1>
                    <Products/>
                </section>
            </Layout>
        </QueryClientProvider>
    )
}
