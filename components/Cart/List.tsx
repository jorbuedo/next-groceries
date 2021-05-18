import { CartItem } from 'models/Cart'
import { tw } from 'twind'
import CartCard from './Card'

type CartListProps = {
  cartItemList: CartItem[]
}

export default function CartList({ cartItemList }: CartListProps) {
  return (
    <div className={tw`grid grid-flow-row gap-4`}>
      {cartItemList.map((cartItem) => (
        <CartCard key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  )
}
