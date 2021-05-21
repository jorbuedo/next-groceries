import { getGroceries, Grocery } from 'models/Grocery'
import { tw } from 'twind'
import { useQuery } from 'react-query'
import GroceryListCard from './Card'

export const List = ({ groceryList }: { groceryList: Grocery[] }) => (
  <div
    className={tw`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4`}
  >
    {groceryList.map((grocery) => (
      <GroceryListCard key={grocery.id} grocery={grocery} />
    ))}
  </div>
)

export default function GroceryListList() {
  const { data: groceryList } = useQuery<Grocery[]>(
    'groceryList',
    getGroceries,
    {
      refetchOnMount: false,
    },
  )

  if (!groceryList) {
    return null
  }

  return <List groceryList={groceryList} />
}
