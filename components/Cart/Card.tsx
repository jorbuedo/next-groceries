import { CartItem } from 'models/Cart'
import { tw } from 'twind'

type CartCardProps = {
  cartItem: CartItem
}

export default function CartCard({ cartItem }: CartCardProps) {
  return (
    <div className={tw`bg-white flex`}>
      <img
        alt={cartItem.productName}
        className={tw`h-24 w-24 object-cover`}
        src={cartItem.image_url}
        loading="lazy"
      />
      <div className={tw`flex flex-col flex-1 ml-4 justify-between`}>
        <h3 className={tw`font-semibold `}>{cartItem.productName}</h3>
        <p
          className={tw`font-semibold text-blue-500 self-end`}
        >{`${cartItem.price} €`}</p>
        <input type="number" min={0} max={cartItem.stock} defaultValue={1} />
      </div>
    </div>
  )
}
