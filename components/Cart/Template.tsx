import { groceryToCartItem } from 'models/Cart'
import { buttonGradient } from 'styles'
import { getGroceries, Grocery } from 'models/Grocery'
import { tw } from 'twind'
import { useQuery } from 'react-query'
import CartList from './List'

export default function CartTemplate() {
  const { data } = useQuery<Grocery[]>('groceryList', getGroceries)
  const cartItemList = data?.slice(0, 10).map((x) => groceryToCartItem(x)) || []

  return (
    <form className={tw`flex flex-col h-full relative`}>
      <div
        className={tw`overflow-auto overscroll-contain mb-32 pb-4 pr-4 -mr-4`}
      >
        <CartList cartItemList={cartItemList} />
      </div>
      <div
        className={tw`absolute bottom-0 bg-white flex flex-col justify-between h-32 w-full`}
      >
        <hr className={tw`border border-gray-100 my-2`} />
        <div className={tw`flex justify-between items-baseline`}>
          <p className={tw`font-medium px-2 mx-auto`}>Total Amount</p>
          <p className={tw`text-lg text-yellow-600`}>233€</p>
        </div>
        <hr className={tw`border border-gray-100 my-2`} />
        <button
          type="submit"
          className={tw`${buttonGradient} font-bold text-white truncate outline-none focus-visible:ring-2 rounded shadow py-2 px-4 w-full`}
        >
          Make a payment
        </button>
      </div>
    </form>
  )
}
