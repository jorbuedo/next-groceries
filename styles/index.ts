import { apply } from 'twind'
import { css } from 'twind/css'

export const buttonGradient = apply`bg-gradient-to-r from-yellow-500 not-hover:to-yellow-600 hover:to-yellow-500`
export const headerHeight = apply`h-12`
export const mainHeight = css({ minHeight: 'calc(100vh - 3rem)' })
