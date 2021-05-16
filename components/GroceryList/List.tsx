import { Grocery } from 'models/Grocery'
import { tw } from 'twind'
import GroceryListCard from './Card'

type GroceryListListProps = {
  groceryList: Grocery[]
}

export default function GroceryListList({ groceryList }: GroceryListListProps) {
  return (
    <div
      className={tw`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
    >
      {groceryList.map((grocery) => (
        <GroceryListCard key={grocery.id} grocery={grocery} />
      ))}
    </div>
  )
}
