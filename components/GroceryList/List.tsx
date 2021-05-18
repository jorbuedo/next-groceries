import { Grocery } from 'models/Grocery'
import { tw } from 'twind'
import GroceryListCard from './Card'

type GroceryListListProps = {
  groceryList: Grocery[]
}

export default function GroceryListList({ groceryList }: GroceryListListProps) {
  return (
    <div className={tw`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4`}>
      {groceryList.map((grocery) => (
        <GroceryListCard key={grocery.id} grocery={grocery} />
      ))}
    </div>
  )
}
