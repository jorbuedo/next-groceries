import Link from 'next/link'

export default function ServerError() {
  return (
    <>
      <h1>500 - Server-side error</h1>
      <p>Sorry, something went wrong on our side and you got here.</p>
      <p>Let's get you back into the App with one of these links:</p>
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
