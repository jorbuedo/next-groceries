import { api } from 'utils/constants'

export type Grocery = {
  id: string
  imageUrl: string
  stock: number
  productName: string
  price: number
  productDescription: string
  favorite: boolean
}

export const getGroceries = async () => {
  const res = await fetch(`${api}/grocery`)
  return res.json()
}

// Issue: useQuery types complaining with this one => https://github.com/tannerlinsley/react-query/issues/1675
export const getGrocery = async ({
  queryKey,
}: {
  queryKey: [string, { id: Grocery['id'] }]
}) => {
  const [, { id }] = queryKey
  const res = await fetch(`${api}/grocery/${id}`)
  return res.json()
}

export const getFavoriteGroceries = async () => {
  const res = await fetch(`${api}/grocery?favorite=true`)
  return res.json()
}
