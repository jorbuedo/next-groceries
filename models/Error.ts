import { makeVar } from 'lib/ReactiveVar'

export const errorsVar = makeVar<Error[]>([])
