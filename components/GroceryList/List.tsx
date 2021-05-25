import { getGroceries, Grocery } from 'models/Grocery'
import { scrollAtom } from 'utils/scroll'
import { tw } from 'twind'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useInfiniteQuery } from 'react-query'
import GroceryListCard from './Card'

export const List = ({ groceryList }: { groceryList?: Grocery[] }) => {
  if (!groceryList) {
    return null
  }
  return (
    <div
      className={tw`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 mb-4`}
    >
      {groceryList.map((grocery) => (
        <GroceryListCard key={grocery.id} grocery={grocery} />
      ))}
    </div>
  )
}

export default function GroceryListList() {
  const [scroll] = useAtom(scrollAtom)
  const { data, fetchNextPage } = useInfiniteQuery(
    'groceryList',
    getGroceries,
    {
      staleTime: Infinity,
      keepPreviousData: true,
      refetchOnMount: false,
      getNextPageParam: (prev, allpages) =>
        prev.length ? allpages.length : undefined,
    },
  )

  useEffect(() => {
    const shouldFetchMore =
      window.innerHeight + scroll + window.innerHeight / 3 >=
      document.body.scrollHeight
    if (shouldFetchMore) {
      fetchNextPage()
    }
  }, [scroll])

  return (
    <div>
      {data?.pages.map((groceryList, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <List key={i} groceryList={groceryList} />
      )) || null}
    </div>
  )
}
