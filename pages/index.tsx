import Head from 'next/head'
import Favicon from 'components/Favicon'

export default function Home() {
  return (
    <>
      <Head>
        <title>Grocery list</title>
        <meta
          name="description"
          content="The way to shop. Everything you need in one grocery list."
        />
        <Favicon />
      </Head>

      <main>
        <p className="text-red-500">Hello World!</p>
      </main>
    </>
  )
}
