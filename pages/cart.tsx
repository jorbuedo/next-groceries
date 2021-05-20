import { mainHeight } from 'styles'
import { tw } from 'twind'
import Cart from 'components/Cart'
import Head from 'next/head'

export default function CartPage() {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <main className={tw`${mainHeight} relative p-4 w-screen`}>
        <div className={tw`h-full max-w-md`}>
          <Cart.Template />
        </div>
      </main>
    </>
  )
}
