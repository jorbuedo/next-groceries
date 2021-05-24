import { api } from 'utils/constants'
import { dispatchToToaster, ToastType } from 'components/Toaster'
import { QueryClient, UseMutationOptions } from 'react-query'
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

export const getGroceries = async (): Promise<Grocery[]> => {
  const res = await fetch(`${api}/grocery`)
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
    const groceryList = queryClient.getQueryData<Grocery[]>('groceryList')

    if (groceryList === undefined) {
      return undefined
    }

    const groceryIndex = groceryList?.findIndex((g) => id === g.id)

    if (groceryIndex === undefined || groceryIndex === -1) {
      return undefined
    }
    queryClient.setQueryData<Grocery[]>(
      'groceryList',
      produce(groceryList, (draft) => {
        // eslint-disable-next-line no-param-reassign
        draft[groceryIndex].favorite = isFavorite
      }),
    )

    return groceryList[groceryIndex]
  },
  onError: (err, { id }, previousGrocery) => {
    // eslint-disable-next-line no-console
    console.warn('Failed setting favorite: ', id, err)
    dispatchToToaster('Failed setting favorite', ToastType.warning)

    if (previousGrocery) {
      const groceryList = queryClient.getQueryData<Grocery[]>('groceryList')
      const groceryIndex = groceryList?.findIndex((g) => id === g.id)

      if (
        groceryList !== undefined &&
        groceryIndex !== undefined &&
        groceryIndex >= 0
      ) {
        queryClient.setQueryData<Grocery[]>(
          'groceryList',
          produce(groceryList, (draft) => {
            // eslint-disable-next-line no-param-reassign
            draft[groceryIndex].favorite = previousGrocery.favorite
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
