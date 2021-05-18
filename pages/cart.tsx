import Cart from 'components/Cart'
import Head from 'next/head'
import { tw } from 'twind'

export default function CartPage() {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <main className={tw`relative p-4 h-screen w-screen`}>
        <div className={tw`h-full max-w-md`}>
          <Cart.Template />
        </div>
      </main>
    </>
  )
}
