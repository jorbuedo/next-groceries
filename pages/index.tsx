import { getGroceries } from 'models/Grocery'
import { h1Atom } from 'components/Header/Header'
import { mainHeight } from 'styles'
import { tw } from 'twind'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import Cart from 'components/Cart'
import GroceryList from 'components/GroceryList'
import Head from 'next/head'
import Panel from 'components/Panel'

export default function GroceryListPage() {
  const { isLoading } = useQuery('groceryList', getGroceries, {
    staleTime: 30000,
  })
  const [, setH1] = useAtom(h1Atom)
  useEffect(() => {
    setH1('Grocery List')
  }, [])

  return (
    <>
      <Head>
        <title>Grocery list | Rainbow Market</title>
      </Head>

      <main className={tw`bg-gray-50 flex ${mainHeight}`}>
        <div
          className={tw`ml-auto mr-auto p-2 md:p-4 w-full md:w-4/5 max-w-7xl`}
        >
          {isLoading ? <GroceryList.SkeletonList /> : <GroceryList.List />}
        </div>

        <Panel>
          <Cart.Template />
        </Panel>
      </main>
    </>
  )
}
