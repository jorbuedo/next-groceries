import { tw } from 'twind'
import { css } from 'twind/css'
import { mainHeight } from 'styles'

type PanelProps = {
  children: React.ReactNode
}

const hideScrollBar = css({
  '*': { scrollbarWidth: 'thin' },
  '-webkit-scrollbar': { width: 'thin' },
})

export default function Panel({ children }: PanelProps) {
  return (
    <div className={tw`bg-white hidden md:block w-full max-w-sm relative`}>
      <div
        className={tw`${mainHeight} ${hideScrollBar} h-1 bottom-0 fixed w-full max-w-sm p-4`}
      >
        {children}
      </div>
    </div>
  )
}
