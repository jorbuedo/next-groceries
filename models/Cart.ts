import { atom } from 'jotai'
import { atomWithLocalStorage } from 'utils/atom'
import { Grocery } from './Grocery'

export type CartItem = Omit<Grocery, 'productDescription' | 'favorite'> & {
  quantity: number
}

export const cartAtom = atomWithLocalStorage<CartItem[]>('Cart', [])

export const cartTotalAtom = atom((get) =>
  get(cartAtom).reduce((acc, cur) => acc + cur.price * cur.quantity, 0),
)

export const groceryToCartItem = ({
  productDescription: _productDescription,
  favorite: _favorite,
  ...cartItem
}: Grocery): CartItem => ({ quantity: 1, ...cartItem })
