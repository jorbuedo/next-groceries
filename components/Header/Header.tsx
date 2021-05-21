import { headerHeight } from 'styles'
import { tw } from 'twind'
import { useIsFetching } from 'react-query'
import Link from 'next/link'

export default function Header() {
  const isFetching = useIsFetching()
  return (
    <header className={tw`${headerHeight} border flex`}>
      <Link href="/">
        <img
          className={tw`cursor-pointer h-full p-1 ${
            isFetching && 'animate-pulse'
          }`}
          src="/android-chrome-192x192.png"
          alt="Logo: Basket with fruits"
        />
      </Link>
      <nav className={tw`flex items-center mx-4 sm:mx-8`}>
        <Link href="/favorites">Favorites</Link>
      </nav>
    </header>
  )
}
