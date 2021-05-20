import { tw } from 'twind'

export default function Toaster() {
  const errors = [] as Error[]

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
