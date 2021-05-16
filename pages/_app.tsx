import { AppProps } from 'next/app'
import Head from 'next/head'
import Favicon from 'components/Favicon'

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
    </>
  )
}

export default App
