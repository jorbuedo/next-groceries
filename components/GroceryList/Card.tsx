import { buttonGradient } from 'styles'
import { cartAtom, groceryToCartItem } from 'models/Cart'
import { dispatchToToaster, ToastType } from 'components/Toaster'
import { Grocery } from 'models/Grocery'
import { lineClamp } from '@twind/line-clamp'
import { tw } from 'twind'
import { useAtom } from 'jotai'
import Favorite from 'components/Favorite'

type GroceryListCardProps = {
  grocery: Grocery
}

export default function GroceryListCard({ grocery }: GroceryListCardProps) {
  const [cartItems, setCartItems] = useAtom(cartAtom)
  const handleAddToCart = () => {
    if (!grocery.stock) {
      dispatchToToaster('Out of stock :(', ToastType.warning)
      return
    }
    if (!cartItems.find(({ id }) => id === grocery.id)) {
      setCartItems([groceryToCartItem(grocery), ...cartItems])
      dispatchToToaster(`${grocery.productName} added`, ToastType.success)
    }
  }

  return (
    <div
      className={tw`bg-white flex flex-col relative rounded shadow overflow-hidden`}
    >
      <div className={tw`absolute top-1 right-1 w-12 z-10`}>
        <Favorite isFavorite={grocery.favorite} id={grocery.id} />
      </div>
      <div className={tw`pb-[50%] relative`}>
        <img
          alt={grocery.productName}
          className={tw`absolute top-0 left-0 h-full w-full object-cover`}
          src={grocery.imageUrl}
          loading="lazy"
        />
      </div>
      <div className={tw`flex flex-col flex-1 p-4 pb-2`}>
        <div className={tw`flex justify-between mb-2`}>
          <h3 className={tw`font-semibold`}>{grocery.productName}</h3>
          <p
            className={tw`font-semibold whitespace-nowrap ml-4 text-blue-500`}
          >{`${grocery.price} €`}</p>
        </div>
        <p className={tw`text-sm ${lineClamp(3)}`}>
          {grocery.productDescription}
        </p>
        <div className={tw`flex justify-between mt-auto pt-2 text-sm`}>
          <p className={tw`mt-auto`}>{`${grocery.stock} left`}</p>
          <button
            type="button"
            className={tw`${buttonGradient} px-3 py-1 rounded text-gray-50 shadow font-semibold focus-visible:ring-4`}
            onClick={handleAddToCart}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  )
}
