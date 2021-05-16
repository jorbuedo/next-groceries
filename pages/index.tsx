import Head from 'next/head'
import { useGroceryList } from 'models/Grocery'
import GroceryList from 'components/GroceryList'

export default function GroceryListPage() {
  const { loading, groceryList } = useGroceryList()
  return (
    <>
      <Head>
        <title>Grocery list</title>
      </Head>

      <main>
        {loading ? (
          <GroceryList.SkeletonList />
        ) : (
          <GroceryList.List groceryList={groceryList} />
        )}
      </main>
    </>
  )
}
