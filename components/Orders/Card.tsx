import { Order } from 'models/Order'
import { tw } from 'twind'

type OrderCardProps = {
  order: Order
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <div className={tw`bg-white flex flex-col relative rounded shadow p-4`}>
      <h3 className={tw`font-semibold`}>{`Order #${order.id}`}</h3>
      <p className={tw`font-semibold whitespace-nowrap`}>
        Total price:{' '}
        <span className={tw`text-blue-500`}>{`${order.totalPrice} €`}</span>
      </p>
      <p className={tw`font-semibold whitespace-nowrap`}>
        {`Created at: ${new Date(order.createdAt).toLocaleDateString()}`}
      </p>
      <ul>
        {order.items.map(({ id, productName, quantity }) => (
          <li key={id}>{`${productName} x${quantity}`}</li>
        ))}
      </ul>
    </div>
  )
}
