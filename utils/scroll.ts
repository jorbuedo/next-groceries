import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'
import { throttle } from 'utils'

export const scrollAtom = atom<number>(0)

export const useScroll = () => {
  const [, setScroll] = useAtom(scrollAtom)
  useEffect(() => {
    const handler = throttle(() => {
      setScroll(window.pageYOffset)
    }, 20)
    window.addEventListener('scroll', handler)
    return () => {
      window.removeEventListener('scroll', handler)
    }
  }, [])
}
