import { tw } from 'twind'

export default function OrdersSkeletonCard() {
  return (
    <div className={tw`bg-white rounded shadow`}>
      <div className={tw`animate-pulse p-4 pb-2`}>
        <div className={tw`bg-blue-100 h-6 mb-2 rounded w-2/3`} />
        <div className={tw`bg-blue-100 h-12 rounded`} />
      </div>
      <div className={tw`animate-pulse p-4 pb-2`}>
        <div className={tw`bg-blue-100 h-6 mb-2 rounded w-2/3`} />
        <div className={tw`bg-blue-100 h-12 rounded`} />
      </div>
    </div>
  )
}
