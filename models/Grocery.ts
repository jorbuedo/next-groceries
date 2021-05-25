import { api } from 'utils/constants'
import { dispatchToToaster, ToastType } from 'components/Toaster'
import { InfiniteData, QueryClient, UseMutationOptions } from 'react-query'
import produce from 'immer'

export type Grocery = {
  id: string
  imageUrl: string
  stock: number
  productName: string
  price: number
  productDescription: string
  favorite: boolean
}

export const getGroceries = async ({ pageParam = 0 }): Promise<Grocery[]> => {
  const res = await fetch(`${api}/grocery?_page=${pageParam}&_limit=24`)
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json()
}

// Issue: useQuery types complaining with this one => https://github.com/tannerlinsley/react-query/issues/1675
export const getGrocery = async ({
  queryKey,
}: {
  queryKey: [string, { id: Grocery['id'] }]
}): Promise<Grocery> => {
  const [, { id }] = queryKey
  const res = await fetch(`${api}/grocery/${id}`)
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json()
}

export const getFavoriteGroceries = async (): Promise<Grocery[]> => {
  const res = await fetch(`${api}/grocery?favorite=true`)
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json()
}

type FavoriteProps = {
  id: Grocery['id']
  isFavorite: Grocery['favorite']
}

export const setFavoriteGrocery = async ({
  id,
  isFavorite,
}: FavoriteProps): Promise<Grocery> => {
  const res = await fetch(`${api}/grocery/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ favorite: isFavorite }),
  })
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json()
}

export const getFavoriteOptimisticOptions: (
  queryClient: QueryClient,
) => UseMutationOptions<Grocery, Error, FavoriteProps, Grocery | undefined> = (
  queryClient,
) => ({
  onMutate: async ({ isFavorite, id }) => {
    await queryClient.cancelQueries('groceryList')
    const groceryList =
      queryClient.getQueryData<InfiniteData<Grocery[]>>('groceryList')

    if (groceryList === undefined) {
      return undefined
    }

    let groceryPageIndex = 0
    const groceryPage = groceryList?.pages.findIndex((page) =>
      page.findIndex((g, i) => {
        groceryPageIndex = i
        return id === g.id
      }),
    )

    if (groceryPage === undefined || groceryPage === -1) {
      return undefined
    }

    queryClient.setQueryData<InfiniteData<Grocery[]>>(
      'groceryList',
      produce(groceryList, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.pages[groceryPage][groceryPageIndex].favorite = isFavorite
      }),
    )

    return groceryList.pages[groceryPage][groceryPageIndex]
  },
  onError: (err, { id }, previousGrocery) => {
    // eslint-disable-next-line no-console
    console.warn('Failed setting favorite: ', id, err)
    dispatchToToaster('Failed setting favorite', ToastType.warning)

    if (previousGrocery) {
      const groceryList =
        queryClient.getQueryData<InfiniteData<Grocery[]>>('groceryList')
      let groceryPageIndex = 0
      const groceryPage = groceryList?.pages.findIndex((page) =>
        page.findIndex((g, i) => {
          groceryPageIndex = i
          return id === g.id
        }),
      )
      if (
        groceryList !== undefined &&
        groceryPage !== undefined &&
        groceryPage >= 0
      ) {
        queryClient.setQueryData<InfiniteData<Grocery[]>>(
          'groceryList',
          produce(groceryList, (draft) => {
            // eslint-disable-next-line no-param-reassign
            draft.pages[groceryPage][groceryPageIndex].favorite =
              previousGrocery.favorite
          }),
        )
      }
    }
  },
  onSettled: () => {
    queryClient.invalidateQueries('groceryList')
    queryClient.invalidateQueries('favoriteList')
  },
})
