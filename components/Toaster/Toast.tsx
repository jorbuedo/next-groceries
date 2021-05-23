import { tw } from 'twind'
import icons from './Icon'
import { ToastType } from './ToastType'

export type Toast = {
  id: string
  timestamp: number
  type: ToastType
  data: Error | { message: string }
}

export default function Toast({ type, data }: Toast) {
  const Icon = icons[type]
  const toastColor = {
    [ToastType.error]: 'red',
    [ToastType.info]: 'blue',
    [ToastType.success]: 'green',
    [ToastType.warning]: 'yellow',
  }[type]

  return (
    <div
      className={tw`flex items-center border-l-4 py-2 px-3 shadow-md mb-2 text-white rounded bg-${toastColor}-500 border-${toastColor}-700`}
    >
      <i className={tw`bg-${toastColor}-700 rounded-1/2 mr-3`}>
        <Icon />
      </i>
      <p className={tw`text-center w-full`}>{data.message}</p>
    </div>
  )
}
