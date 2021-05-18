import Cart from 'components/Cart'
import Head from 'next/head'
import { tw } from 'twind'

export default function CartPage() {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <main className={tw`p-4 max-w-md`}>
        <Cart.Template />
      </main>
    </>
  )
}
