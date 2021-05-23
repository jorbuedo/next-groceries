import {
  setFavoriteGrocery,
  getFavoriteOptimisticOptions,
} from 'models/Grocery'
import { useMutation, useQueryClient } from 'react-query'
import { tw } from 'twind/shim'
import Heart from './Heart'

type FavoriteProps = {
  isFavorite?: boolean
  id: string
}

export default function Favorite({ isFavorite, id }: FavoriteProps) {
  const queryClient = useQueryClient()

  const { mutate: setFavorite, status } = useMutation(
    setFavoriteGrocery,
    getFavoriteOptimisticOptions(queryClient),
  )

  const handleClick = () => {
    setFavorite({ id, isFavorite: !isFavorite })
  }

  return (
    <button
      className={tw`p-2 rounded outline-none focus-visible:ring-2 hover:animate-pulse ${
        isFavorite ? 'text-red-600' : 'text-white'
      } ${status === 'loading' && 'animate-ping'}`}
      type="button"
      onClick={handleClick}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart />
    </button>
  )
}
