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

      <main className={tw`bg-indigo-50 flex`}>
        <div
          className={tw`ml-auto mr-auto p-2 md:p-4 w-full md:w-4/5 max-w-7xl`}
        >
          {loading ? (
            <GroceryList.SkeletonList />
          ) : (
            <GroceryList.List groceryList={groceryList} />
          )}
        </div>

        <div className={tw`bg-white hidden md:block w-1/5 max-w-xl relative`}>
          <div className={tw`fixed max-h-screen w-inherit p-4`}>
            <Cart.List cartItemList={groceryList.slice(0, 3)} />
          </div>
        </div>
      </main>
    </>
  )
}
