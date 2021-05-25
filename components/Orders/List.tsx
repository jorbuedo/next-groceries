import { Order } from 'models/Order'
import { tw } from 'twind'
import OrderCard from './Card'

export default function OrdersList({ orderList }: { orderList?: Order[] }) {
  if (!orderList) {
    return null
  }
  return (
    <div
      className={tw`grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4`}
    >
      {orderList.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}
