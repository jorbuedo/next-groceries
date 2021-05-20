import { groceriesAtom, Grocery } from 'models/Grocery'
import { tw } from 'twind'
import { useAtom } from 'jotai'
import GroceryListCard from './Card'

export default function GroceryListList() {
  const [groceryList] = useAtom<Grocery[]>(groceriesAtom)
  return (
    <div
      className={tw`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4`}
    >
      {groceryList.map((grocery) => (
        <GroceryListCard key={grocery.id} grocery={grocery} />
      ))}
    </div>
  )
}
