import { AppProps } from 'next/app'
import Head from 'next/head'
import Favicon from 'components/Favicon'
import Toaster from 'components/Toaster'
import { tw } from 'twind'
import 'twind.config'

if (process.env.NODE_ENV === 'development') {
  import('twind/shim')
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Favicon />
      </Head>
      <Component {...pageProps} />
      <aside className={tw`fixed right-4 bottom-4`}>
        <Toaster />
      </aside>
    </>
  )
}

export default App
