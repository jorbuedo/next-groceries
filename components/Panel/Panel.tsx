import { tw } from 'twind'
import { css } from 'twind/css'
import { mainHeight } from 'styles'
import { atom, useAtom } from 'jotai'

type PanelProps = {
  children: React.ReactNode
}

const hideScrollBar = css({
  '*': { scrollbarWidth: 'thin' },
  '-webkit-scrollbar': { width: 'thin' },
})

export const panelAtom = atom(false)

export default function Panel({ children }: PanelProps) {
  const [isOpen] = useAtom(panelAtom)
  return (
    <div
      className={tw`${
        isOpen && 'md:block'
      } bg-white hidden w-full max-w-sm relative`}
    >
      <div
        className={tw`${mainHeight} ${hideScrollBar} h-1 bottom-0 fixed w-full max-w-sm p-4`}
      >
        {children}
      </div>
    </div>
  )
}
