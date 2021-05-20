import { atomWithQuery } from 'jotai/query'
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

export const groceriesAtom = atomWithQuery(() => ({
  queryKey: ['groceries'],
  queryFn: async () => {
    const res = await fetch(`${api}/grocery`)
    return res.json()
  },
}))
