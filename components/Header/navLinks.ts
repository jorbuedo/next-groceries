import Cart from 'components/Cart'
import Heart from 'components/Favorite/Heart'
import Orders from 'components/Orders'
import { NavLinkProps } from './NavLink'

export default [
  {
    anchorClass: '',
    ariaLabel: 'Go to favorites',
    href: '/favorites',
    icon: Heart,
    label: 'Favorites',
    selected: false,
  },
  {
    anchorClass: '',
    ariaLabel: 'Go to orders',
    href: '/orders',
    icon: Orders.Icon,
    label: 'Orders',
    selected: false,
  },
  {
    anchorClass: 'md:hidden',
    ariaLabel: 'Go to cart',
    href: '/cart',
    icon: Cart.Icon,
    label: 'Cart',
    selected: false,
  },
] as NavLinkProps[]
