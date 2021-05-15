import Head from 'next/head'
import { tw } from 'twind'

export default function Favorites() {
  return (
    <>
      <Head>
        <title>Favorites</title>
      </Head>

      <main>
        <p className={tw`text-red-500`}>Hello Favs!</p>
      </main>
    </>
  )
}
