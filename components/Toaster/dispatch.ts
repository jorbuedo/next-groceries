import { Toast } from './Toast'
import { ToastType } from './ToastType'

export const dispatchToToaster = (
  data: Pick<Toast, 'data'> | string,
  type: Partial<ToastType> = data instanceof Error
    ? ToastType.error
    : ToastType.info,
) => {
  document.dispatchEvent(
    new CustomEvent('toasterEvent', {
      detail: {
        type,
        data: typeof data === 'string' ? { message: data } : data,
      },
    }),
  )
}

console.log({ dispatchToToaster })
