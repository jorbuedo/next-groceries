import { tw } from 'twind'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import ToastElement, { Toast } from './Toast'

type ToasterEvent = Pick<Toast, 'type' | 'data'>

const TIMEOUT = 5000

export default function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [activeToasts, setActiveToasts] = useState({})

  useEffect(() => {
    const handler = ({ detail: { type, data } }: CustomEvent<ToasterEvent>) => {
      setToasts((current) => [
        ...current,
        {
          id: nanoid(),
          timestamp: Date.now(),
          type,
          data,
        },
      ])
    }
    document.addEventListener('toasterEvent', handler as EventListener)
    return () => {
      document.removeEventListener('toasterEvent', handler as EventListener)
    }
  }, [])

  useEffect(() => {
    if (toasts.length) {
      const id = toasts[toasts.length - 1].id

      /* Show */
      setTimeout(() => {
        setActiveToasts((current) => ({
          ...current,
          [id]: true,
        }))
      }, 0)

      /* Hide */
      setTimeout(() => {
        setActiveToasts((current) => ({
          ...current,
          [id]: false,
        }))
      }, TIMEOUT)

      /* Delete */
      setTimeout(() => {
        setToasts((current) => current.filter((c) => c.id !== id))
      }, TIMEOUT + 200)
    }
  }, [toasts])

  if (!toasts.length) {
    return null
  }

  return (
    <ul>
      {toasts.map((toast) => (
        <li
          key={toast.id}
          className={tw`${
            !activeToasts[toast.id] && 'translate-x-full'
          } transition-transform`}
        >
          <ToastElement {...toast} />
        </li>
      ))}
    </ul>
  )
}
