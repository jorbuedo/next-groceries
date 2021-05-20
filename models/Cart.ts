import { atomWithLocalStorage } from 'utils/atom'
import { Grocery } from './Grocery'

export type CartItem = Omit<Grocery, 'productDescription' | 'favorite'>

export const cartAtom = atomWithLocalStorage('Cart', {})

export const groceryToCartItem = ({
  productDescription: _productDescription,
  favorite: _favorite,
  ...cartItem
}: Grocery): CartItem => cartItem
