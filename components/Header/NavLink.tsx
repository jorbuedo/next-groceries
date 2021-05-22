import { apply, tw } from 'twind'
import Link from 'next/link'

const linkStyle = apply`cursor-pointer flex items-center md:px-4 text-gray-900 hover:(bg-yellow-500 text-white)`

export type NavLinkProps = {
  anchorClass: string
  ariaLabel: string
  href: string
  icon: React.ElementType
  label: string
  selected: boolean
}

export default function NavLink({
  href,
  ariaLabel,
  anchorClass,
  label,
  icon: Icon,
  selected,
}: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <a
        className={tw`${linkStyle} ${anchorClass} ${
          selected && 'bg-yellow-600 text-white'
        }`}
        aria-label={ariaLabel}
      >
        <span className={tw`p-2 w-12 h-12`}>
          <Icon />
        </span>
        <span className={tw`hidden md:block`}>{label}</span>
      </a>
    </Link>
  )
}
