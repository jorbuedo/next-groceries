import { buttonGradient } from 'styles'
import { cartAtom, cartTotalAtom } from 'models/Cart'
import { cartToOrderDraft, createOrderFromDraft } from 'models/Order'
import { tw } from 'twind'
import { useAtom } from 'jotai'
import { useMutation, useQueryClient } from 'react-query'
import { dispatchToToaster, ToastType } from 'components/Toaster'
import CartList from './List'

export default function CartTemplate() {
  const [cartItemList, setCartItemList] = useAtom(cartAtom)
  const [cartTotal] = useAtom(cartTotalAtom)
  const { mutate: createOrder, status } = useMutation(createOrderFromDraft)
  const queryClient = useQueryClient()

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (cartItemList.length && status !== 'loading') {
      createOrder(
        { order: cartToOrderDraft(cartItemList, cartTotal) },
        {
          onSuccess: (order) => {
            setCartItemList([])
            dispatchToToaster(
              `New order created: ${order.id}`,
              ToastType.success,
            )
            queryClient.invalidateQueries('orderList')
          },
          onError: (err) => {
            // eslint-disable-next-line no-console
            console.warn('Failed to create order: ', err)
            dispatchToToaster(
              `Failed to create order, try again later.`,
              ToastType.error,
            )
          },
        },
      )
    }
  }

  return (
    <form className={tw`flex flex-col h-full relative`} onSubmit={handleSubmit}>
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
            suppressHydrationWarning
          >{`${cartTotal} €`}</p>
        </div>
        <hr className={tw`border border-gray-100 my-2`} />
        <button
          type="submit"
          className={tw`${
            status === 'loading'
              ? 'bg-gray-600 cursor-not-allowed'
              : buttonGradient
          } font-bold text-white truncate outline-none focus-visible:ring-2 rounded shadow py-2 px-4 w-full`}
        >
          Make a payment
        </button>
      </div>
    </form>
  )
}
