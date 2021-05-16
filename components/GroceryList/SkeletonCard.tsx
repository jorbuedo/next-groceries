import { tw } from 'twind'

export default function GroceryListSkeletonCard() {
  return (
    <div className={tw`border rounded shadow`}>
      <div className={tw`animate-pulse bg-blue-100 pb-[50%]`} />
      <div className={tw`animate-pulse p-4 pb-2`}>
        <div className={tw`bg-blue-100 h-6 mb-2 rounded w-2/3`} />
        <div className={tw`bg-blue-100 h-12 rounded`} />
      </div>
    </div>
  )
}
