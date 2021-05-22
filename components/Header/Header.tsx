import { atom, useAtom } from 'jotai'
import { headerHeight } from 'styles'
import { tw } from 'twind'
import { useIsFetching } from 'react-query'
import { useRouter } from 'next/router'
import Link from 'next/link'
import NavLink from './NavLink'
import navLinks from './navLinks'

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
          <img
            className={tw`cursor-pointer h-full p-1 ${
              isFetching && 'animate-pulse'
            }`}
            src="/android-chrome-192x192.png"
            alt="Logo: Basket with fruits"
          />
        </Link>
        <h1
          className={tw`flex items-center font-bold sm:text-lg mx-4 sm:mx-12 truncate`}
        >
          {h1Text}
        </h1>
        <nav className={tw`flex items-center ml-auto`}>
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.href}
              {...navLink}
              selected={pathname === navLink.href}
            />
          ))}
        </nav>
      </header>
      <div className={tw`${headerHeight}`} />
    </>
  )
}
