import { atom } from 'jotai'

export const atomWithLocalStorage = <T extends unknown>(
  key: string,
  initialValue: T,
) => {
  const getInitialValue = () => {
    if (typeof localStorage === 'undefined') {
      return initialValue
    }
    try {
      const item = localStorage.getItem(key)
      if (item !== null) {
        return JSON.parse(item)
      }
      return initialValue
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      localStorage.removeItem(key)
      return initialValue
    }
  }
  const baseAtom = atom(getInitialValue())
  const derivedAtom = atom<T, T | ((a: T) => T)>(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        update instanceof Function ? update(get(baseAtom)) : update
      set(baseAtom, nextValue)
      try {
        localStorage.setItem(key, JSON.stringify(nextValue))
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err)
      }
    },
  )
  return derivedAtom
}
