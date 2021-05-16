import { useReactiveVar } from 'lib/ReactiveVar'
import { errorsVar } from 'models/Error'
import { tw } from 'twind'

export default function Toaster() {
  const errors = useReactiveVar(errorsVar)

  if (!errors.length) {
    return null
  }

  return (
    <ul className={tw`bg-red-500`}>
      {errors.map((error) => (
        <li key={error.message}>{error.message}</li>
      ))}
    </ul>
  )
}
