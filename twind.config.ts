import { setup } from 'twind'
import { lineClamp } from '@twind/line-clamp'

setup({
  theme: {
    extend: {
      width: {
        inherit: 'inherit',
      },
    },
  },
  plugins: {
    'line-clamp': lineClamp,
  },
})
