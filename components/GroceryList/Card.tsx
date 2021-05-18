import Favorite from 'components/Favorite'
import { Grocery } from 'models/Grocery'
import { tw } from 'twind'

type GroceryListCardProps = {
  grocery: Grocery
}

export default function GroceryListCard({ grocery }: GroceryListCardProps) {
  return (
    <div
      className={tw`bg-white flex flex-col relative rounded shadow overflow-hidden`}
    >
      <div className={tw`absolute top-1 right-1 w-12 z-10`}>
        <Favorite isFavorite={grocery.favorite} id={grocery.id} />
      </div>
      <div className={tw`pb-[50%] relative`}>
        <img
          alt={grocery.productName}
          className={tw`absolute top-0 left-0 h-full w-full object-cover`}
          src={grocery.image_url}
          loading="lazy"
        />
      </div>
      <div className={tw`flex flex-col flex-1 p-4 pb-2`}>
        <div className={tw`flex justify-between mb-2`}>
          <h3 className={tw`font-semibold`}>{grocery.productName}</h3>
          <p
            className={tw`font-semibold whitespace-nowrap ml-4 text-blue-500`}
          >{`${grocery.price} €`}</p>
        </div>
        <p className={tw`text-sm line-clamp-3`}>{grocery.productDescription}</p>
        <div className={tw`flex justify-between mt-auto pt-1 text-sm`}>
          <p className={tw`mt-auto`}>{`${grocery.stock} left`}</p>
          <button
            type="button"
            className={tw`px-3 py-1 bg-yellow-600 hover:bg-yellow-500 rounded text-gray-50 shadow font-semibold focus-visible:ring-4`}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  )
}
