import Head from 'next/head'
import { tw } from 'twind'
import { useGroceryList } from 'models/Grocery'
import GroceryList from 'components/GroceryList'
import Cart from 'components/Cart'

export default function GroceryListPage() {
  const { loading, groceryList } = useGroceryList()
  return (
    <>
      <Head>
        <title>Grocery list</title>
      </Head>

      <main className={tw`bg-indigo-50 flex min-h-screen`}>
        <div
          className={tw`ml-auto mr-auto p-2 md:p-4 w-full md:w-4/5 max-w-7xl`}
        >
          {loading ? (
            <GroceryList.SkeletonList />
          ) : (
            <GroceryList.List groceryList={groceryList.slice(0, 1)} />
          )}
        </div>

        <div className={tw`bg-white hidden md:block w-full max-w-sm relative`}>
          <div className={tw`fixed max-h-screen w-full max-w-sm p-4`}>
            <Cart.List cartItemList={groceryList.slice(0, 1)} />
          </div>
        </div>
      </main>
    </>
  )
}
