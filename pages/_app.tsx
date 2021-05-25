import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { tw } from 'twind'
import Favicon from 'components/Favicon'
import Head from 'next/head'
import Header from 'components/Header'
import ScrollWatcher from 'components/ScrollWatcher'
import Toaster from 'components/Toaster'

if (process.env.NODE_ENV === 'development') {
  import('twind/shim')
}

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <>
      <Head>
        <Favicon />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <aside className={tw`fixed right-4 bottom-16 w-72 z-10`}>
          <Toaster />
        </aside>
        <ReactQueryDevtools initialIsOpen={false} />
        <ScrollWatcher />
      </QueryClientProvider>
    </>
  )
}

export default App
