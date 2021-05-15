import { Grocery } from './Grocery'

export type CartItem = Omit<Grocery, 'productDescription' | 'favorite'>
