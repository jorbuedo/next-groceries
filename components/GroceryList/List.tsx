import { Grocery } from 'models/Grocery'
import { tw } from 'twind'

type GroceryListListProps = {
  groceryList: Grocery[]
}

export default function GroceryListList({ groceryList }: GroceryListListProps) {
  return (
    <div>
      {groceryList.map(({ id, productName }) => (
        <p key={id} className={tw`text-red-500`}>
          {productName}
        </p>
      ))}
    </div>
  )
}
