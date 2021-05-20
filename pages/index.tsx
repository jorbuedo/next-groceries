import { groceriesAtom, Grocery } from 'models/Grocery'
import { mainHeight } from 'styles'
import { tw } from 'twind'
import Cart from 'components/Cart'
import GroceryList from 'components/GroceryList'
import Head from 'next/head'

export default function GroceryListPage() {
  const loading = true
  return (
    <>
      <Head>
        <title>Grocery list</title>
      </Head>

      <main className={tw`bg-gray-50 flex ${mainHeight}`}>
        <div
          className={tw`ml-auto mr-auto p-2 md:p-4 w-full md:w-4/5 max-w-7xl`}
        >
          {loading ? <GroceryList.SkeletonList /> : <GroceryList.List />}
        </div>

        <div className={tw`bg-white hidden md:block w-full max-w-sm relative`}>
          <div className={tw`${mainHeight} fixed w-full max-w-sm p-4`}>
            <Cart.Template />
          </div>
        </div>
      </main>
    </>
  )
}
