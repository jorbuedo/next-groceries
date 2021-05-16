import { tw } from 'twind'
import GroceryListSkeletonCard from './SkeletonCard'

export default function GroceryListSkeletonList() {
  return (
    <div
      className={tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className={tw`max-w-sm`}>
          <GroceryListSkeletonCard />
        </div>
      ))}
    </div>
  )
}
