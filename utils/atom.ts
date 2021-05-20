import { atom } from 'jotai'

export const atomWithLocalStorage = <T extends unknown>(
  key: string,
  initialValue: Record<string, T>,
) => {
  const getInitialValue = () => {
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
      return {}
    }
  }
  const baseAtom = atom(getInitialValue())
  const derivedAtom = atom(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === 'function' ? update(get(baseAtom)) : update
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
