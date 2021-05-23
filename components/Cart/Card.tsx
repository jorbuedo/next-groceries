import { cartAtom, CartItem } from 'models/Cart'
import { tw } from 'twind'
import { useAtom } from 'jotai'
import InputNumber from 'components/InputNumber'
import produce from 'immer'

type CartCardProps = {
  cartItem: CartItem
}

export default function CartCard({ cartItem }: CartCardProps) {
  const [, setCartItems] = useAtom(cartAtom)

  const handleChange = (count: number) => {
    if (!count) {
      setCartItems((items) => items.filter(({ id }) => id !== cartItem.id))
    } else {
      setCartItems((items) =>
        produce(items, (draft) => {
          const index = draft.findIndex(({ id }) => id === cartItem.id)
          // eslint-disable-next-line no-param-reassign
          if (index !== -1) draft[index].quantity = count
        }),
      )
    }
  }

  return (
    <div className={tw`bg-white flex`}>
      <img
        alt={cartItem.productName}
        className={tw`h-24 w-24 object-cover rounded`}
        src={cartItem.imageUrl}
        loading="lazy"
      />
      <div className={tw`flex flex-col flex-1 ml-4 justify-between`}>
        <h3 className={tw`font-semibold `}>{cartItem.productName}</h3>
        <p
          className={tw`font-semibold text-blue-500 self-end`}
        >{`${cartItem.price} €`}</p>
        <InputNumber
          min={0}
          max={cartItem.stock}
          value={cartItem.quantity}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
