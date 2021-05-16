import { useFetch } from 'lib/Fetch'
import { makeVar, useReactiveVar } from 'lib/ReactiveVar'
import { useEffect } from 'react'
import { errorsVar } from './Error'

export type Grocery = {
  id: string
  // eslint-disable-next-line camelcase
  image_url: string
  stock: number
  productName: string
  price: number
  productDescription: string
  favorite: boolean
}

const groceryListVar = makeVar<Grocery[]>([])

export const useGroceryList = () => {
  const { loading, data, error } = useFetch<Grocery[]>('/grocery')

  const groceryList = useReactiveVar(groceryListVar)

  useEffect(() => {
    groceryListVar(data)
    if (error) {
      errorsVar((errors) => [error, ...errors])
    }
  }, [data, error])

  return { loading, groceryList, error }
}
