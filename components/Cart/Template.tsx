import { buttonGradient } from 'styles'
import { cartAtom, cartTotalAtom } from 'models/Cart'
import { tw } from 'twind'
import { useAtom } from 'jotai'
import CartList from './List'

export default function CartTemplate() {
  const [cartItemList] = useAtom(cartAtom)
  const [cartTotal] = useAtom(cartTotalAtom)

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
          <p
            className={tw`text-lg text-yellow-600 whitespace-nowrap`}
          >{`${cartTotal} €`}</p>
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
