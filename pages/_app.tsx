import { AppProps } from 'next/app'
import 'twind/shim'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
