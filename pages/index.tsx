import Head from 'next/head'
import { tw } from 'twind'
import GroceryList from 'components/GroceryList'
import Cart from 'components/Cart'

export default function GroceryListPage() {
  const { loading, groceryList } = {
    loading: false,
    groceryList: [
      {
        id: '41fd4fd9-95c7-4809-96db-a147d352fdbb',
        image_url:
          'https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair',
        stock: 8,
        productName: 'Unbranded Metal Chair',
        price: 43,
        productDescription:
          'Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.',
        favorite: true,
      },
      {
        id: '20cc33f1-223b-4cf0-878d-fdedb3f60b56',
        image_url:
          'https://dummyimage.com/400x400/2ee9f7/000&text=Handcrafted Metal Towels',
        stock: 41,
        productName: 'Handcrafted Metal Towels',
        price: 98,
        productDescription:
          'Rerum minima laudantium blanditiis dolorem dolores ut sint ut quidem. Est doloremque repellat excepturi dolor consequatur rerum qui. Facere ut vel et enim accusamus ipsum dolores aut. Eaque quo ut omnis unde quam error voluptas non iure.',
        favorite: false,
      },
      {
        id: 'ab284424-8e46-4a3e-8e13-e179b0ab8bb5',
        image_url:
          'https://dummyimage.com/400x400/4de5d5/000&text=Awesome Cotton Soap',
        stock: 47,
        productName: 'Awesome Cotton Soap',
        price: 66,
        productDescription:
          'Molestias sunt quia omnis reprehenderit quia. Iste quia et similique voluptate. Et sit molestias.',
        favorite: false,
      },
    ],
  }
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
            <GroceryList.List groceryList={groceryList} />
          )}
        </div>

        <div className={tw`bg-white hidden md:block w-full max-w-sm relative`}>
          <div className={tw`fixed max-h-screen w-full h-full max-w-sm p-4`}>
            <Cart.Template />
          </div>
        </div>
      </main>
    </>
  )
}
