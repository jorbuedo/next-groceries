import { useEffect, useReducer } from 'react'

type Handler<T> = (v: T) => void

export type ReactiveVar<T> = {
  (newValue?: T | ((value: T) => T)): T
  subscribe: (handler: Handler<T>) => () => void
  unsubscribe: (handler: Handler<T>) => void
}

type EqualsFunc<T> = (a: T, b: T) => boolean

export const makeVar = <T extends unknown>(
  initialValue: T,
  equalsFunc?: EqualsFunc<T>,
): ReactiveVar<T> => {
  let value = initialValue
  const subscribers = new Set<Handler<T>>()

  const reactiveVar = (newValue?: T | ((value: T) => T)) => {
    if (newValue !== undefined) {
      let nextValue = value

      if (newValue instanceof Function) {
        nextValue = newValue(value)
      } else {
        nextValue = newValue
      }

      if (equalsFunc ? !equalsFunc(nextValue, value) : nextValue !== value) {
        subscribers.forEach((handler) => handler(nextValue))
      }
      value = nextValue
    }
    return value
  }

  reactiveVar.subscribe = (handler: Handler<T>) => {
    subscribers.add(handler)
    return () => subscribers.delete(handler)
  }

  reactiveVar.unsubscribe = (handler: Handler<T>) => {
    subscribers.delete(handler)
  }

  return reactiveVar
}

export const useReactiveVar = <T extends unknown>(
  reactiveVar: ReactiveVar<T>,
): T => {
  const handler = useReducer((x) => x + 1, 0)[1]

  useEffect(() => {
    reactiveVar.subscribe(handler)
    return () => {
      reactiveVar.unsubscribe(handler)
    }
  }, [])

  return reactiveVar()
}
