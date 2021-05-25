import { getFavoriteGroceries, Grocery } from 'models/Grocery'
import { h1Atom } from 'components/Header/Header'
import { List as FavoriteList } from 'components/GroceryList/List'
import { mainHeight } from 'styles'
import { tw } from 'twind'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import Cart from 'components/Cart'
import GroceryList from 'components/GroceryList'
import Head from 'next/head'
import Panel from 'components/Panel'

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
  const [, setH1] = useAtom(h1Atom)
  useEffect(() => {
    setH1('Favorites')
  }, [])

  return (
    <>
      <Head>
        <title>Favorites | Rainbow Market</title>
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

        <Panel>
          <Cart.Template />
        </Panel>
      </main>
    </>
  )
}
