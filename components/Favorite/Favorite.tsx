import { tw } from 'twind/shim'
import Heart from './Heart'

type FavoriteProps = {
  isFavorite?: boolean
  id: string
}

export default function Favorite({ isFavorite, id }: FavoriteProps) {
  const handleClick = () => {
    console.log({ id })
  }

  return (
    <button
      className={tw`p-2 rounded outline-none focus-visible:ring-2 hover:animate-pulse ${
        isFavorite ? 'text-red-600' : 'text-white'
      }`}
      type="button"
      onClick={handleClick}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart />
    </button>
  )
}
