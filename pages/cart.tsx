import Head from 'next/head'
import { tw } from 'twind'

export default function Cart() {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <main>
        <p className={tw`text-red-500`}>Hello cart!</p>
      </main>
    </>
  )
}