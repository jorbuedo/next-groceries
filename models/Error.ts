import { makeVar } from 'lib/ReactiveVar'

const ERROR_TIMEOUT = 5000

export const errorsBacklogVar = makeVar<Error[]>([])

export const errorsVar = makeVar<Error[]>([])

export const pushError = (error: Error) => {
  errorsVar((errors) => [error, ...errors])
  setTimeout(() => {
    errorsVar((errors) => {
      errorsBacklogVar((log) => [...log, errors[errors.length - 1]])
      return errors.slice(0, errors.length - 1)
    })
  }, ERROR_TIMEOUT)
}
