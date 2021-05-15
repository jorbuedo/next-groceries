import Head from 'next/head'
import { tw } from 'twind'
import Favicon from 'components/Favicon'
import { api } from 'utils/constants'

export default function GroceryList() {
  return (
    <>
      <Head>
        <title>Grocery list</title>
        <Favicon />
      </Head>

      <main>
        <p className={tw`text-red-500`}>Hello World!</p>
        <pre>{api}</pre>
      </main>
    </>
  )
}
