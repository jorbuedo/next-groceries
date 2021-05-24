import { tw } from 'twind'
import OrdersSkeletonCard from './SkeletonCard'

export default function OrdersSkeletonList() {
  return (
    <div className={tw`grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4`}>
      {Array.from({ length: 3 }).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className={tw`max-w-sm`}>
          <OrdersSkeletonCard />
        </div>
      ))}
    </div>
  )
}
