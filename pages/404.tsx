import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>
        Whatever you were looking for, it's not here. If you were following a
        Link in our App, please let us know.
      </p>
      <p>In the meantime, try one of these instead:</p>
      <ul>
        <li>
          <Link href="/">Grocery list</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </>
  )
}
