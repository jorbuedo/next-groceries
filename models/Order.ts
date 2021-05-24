import { api } from 'utils/constants'
import { CartItem } from './Cart'

export type Order = {
  createdAt: number
  id: number
  items: Omit<CartItem, 'stock' | 'imageUrl'>[]
  totalPrice: number
}

type OrderDraft = Omit<Order, 'id'>

export const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${api}/order`)
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json()
}

export const createOrderFromDraft = async ({
  order,
}: {
  order: OrderDraft
}): Promise<Order> => {
  const res = await fetch(`${api}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json()
}

export const cartToOrderDraft = (
  cart: CartItem[],
  totalPrice: number,
): OrderDraft => ({
  createdAt: Date.now(),
  items: cart.map(({ stock: _stock, imageUrl: _imageUrl, ...item }) => item),
  totalPrice,
})
