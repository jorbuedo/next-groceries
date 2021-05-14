import { AppProps } from 'next/app'

if (process.env.NODE_ENV === 'development') {
  import('twind/shim')
}

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
