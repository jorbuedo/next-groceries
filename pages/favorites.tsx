import { getFavoriteGroceries, Grocery } from 'models/Grocery'
import { List as FavoriteList } from 'components/GroceryList/List'
import { mainHeight } from 'styles'
import { tw } from 'twind'
import { useQuery, useQueryClient } from 'react-query'
import Cart from 'components/Cart'
import GroceryList from 'components/GroceryList'
import Head from 'next/head'

export default function FavoritesPage() {
  const queryClient = useQueryClient()
  const { isLoading, data: favoriteList } = useQuery(
    'favoriteList',
    getFavoriteGroceries,
    {
      placeholderData: () =>
        queryClient
          .getQueryData<Grocery[]>('groceryList')
          ?.filter((grocery) => grocery.favorite),
    },
  )

  return (
    <>
      <Head>
        <title>Favorites</title>
      </Head>

      <main className={tw`bg-gray-50 flex ${mainHeight}`}>
        <div
          className={tw`ml-auto mr-auto p-2 md:p-4 w-full md:w-4/5 max-w-7xl`}
        >
          {isLoading ? (
            <GroceryList.SkeletonList />
          ) : (
            <FavoriteList groceryList={favoriteList} />
          )}
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
