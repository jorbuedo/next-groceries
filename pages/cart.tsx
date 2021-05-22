import { h1Atom } from 'components/Header/Header'
import { mainHeight } from 'styles'
import { tw } from 'twind'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import Cart from 'components/Cart'
import Head from 'next/head'

export default function CartPage() {
  const [, setH1] = useAtom(h1Atom)
  useEffect(() => {
    setH1('Cart')
  }, [])
  return (
    <>
      <Head>
        <title>Cart | Rainbow Market</title>
      </Head>

      <main className={tw`${mainHeight} h-1 relative p-4 w-screen`}>
        <div className={tw`h-full max-w-md`}>
          <Cart.Template />
        </div>
      </main>
    </>
  )
}
