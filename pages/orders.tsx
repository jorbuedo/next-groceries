import { getOrders } from 'models/Order'
import { h1Atom } from 'components/Header/Header'
import { mainHeight } from 'styles'
import { tw } from 'twind'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import Cart from 'components/Cart'
import Head from 'next/head'
import Orders from 'components/Orders'
import Panel from 'components/Panel'

export default function OrdersPage() {
  const { isLoading, data: orderList } = useQuery('orderList', getOrders)
  const [, setH1] = useAtom(h1Atom)
  useEffect(() => {
    setH1('Orders')
  }, [])

  return (
    <>
      <Head>
        <title>Orders | Rainbow Market</title>
      </Head>

      <main className={tw`bg-gray-50 flex ${mainHeight}`}>
        <div
          className={tw`ml-auto mr-auto p-2 md:p-4 w-full md:w-4/5 max-w-7xl`}
        >
          {isLoading ? (
            <Orders.SkeletonList />
          ) : (
            <Orders.List orderList={orderList} />
          )}
        </div>

        <Panel>
          <Cart.Template />
        </Panel>
      </main>
    </>
  )
}
