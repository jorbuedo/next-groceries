import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { tw } from 'twind'
import Favicon from 'components/Favicon'
import Head from 'next/head'
import Header from 'components/Header'
import Toaster from 'components/Toaster'
import { useScroll } from 'utils/scroll'

if (process.env.NODE_ENV === 'development') {
  import('twind/shim')
}

function App({ Component, pageProps }: AppProps) {
  useScroll()
  const queryClient = new QueryClient()
  return (
    <>
      <Head>
        <Favicon />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <aside className={tw`fixed right-4 bottom-4`}>
          <Toaster />
        </aside>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
