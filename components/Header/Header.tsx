import { atom, useAtom } from 'jotai'
import { headerHeight } from 'styles'
import { tw } from 'twind'
import { useIsFetching } from 'react-query'
import { useRouter } from 'next/router'
import Cart from 'components/Cart'
import Link from 'next/link'
import NavLink from './NavLink'
import navLinks from './navLinks'
import TogglePanel from './TogglePanel'

export const h1Atom = atom('')

export default function Header() {
  const { pathname } = useRouter()
  const isFetching = useIsFetching()
  const [h1Text] = useAtom(h1Atom)
  return (
    <>
      <header
        className={tw`${headerHeight} bg-white border-b flex fixed top-0 w-full z-20`}
      >
        <Link href="/">
          <div
            className={tw`pr-4 cursor-pointer flex items-center font-bold text-lg`}
          >
            <>
              <img
                className={tw`w-12 p-1 ${isFetching && 'animate-pulse'}`}
                src="/android-chrome-192x192.png"
                alt="Logo: Basket with fruits"
              />
              {pathname !== '/' && <span className={tw`pl-4`}>⬅</span>}
            </>
          </div>
        </Link>

        <h1 className={tw`flex items-center font-bold sm:text-lg truncate`}>
          {h1Text}
        </h1>
        <nav className={tw`flex items-center ml-auto`}>
          <>
            {navLinks.map((navLink) => (
              <NavLink
                key={navLink.href}
                {...navLink}
                selected={pathname === navLink.href}
              />
            ))}
            <TogglePanel icon={Cart.Icon} label="Cart" />
          </>
        </nav>
      </header>
      <div className={tw`${headerHeight}`} />
    </>
  )
}
