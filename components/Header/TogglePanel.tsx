import { panelAtom } from 'components/Panel/Panel'
import { useAtom } from 'jotai'
import { tw } from 'twind'
import { linkStyle } from './NavLink'

export type TogglePanelProps = {
  icon: React.ElementType
  label: string
}

export default function TogglePanel({ label, icon: Icon }: TogglePanelProps) {
  const [isOpen, setIsOpen] = useAtom(panelAtom)

  return (
    <button
      type="button"
      className={tw`${linkStyle} hidden md:flex focus:outline-none ${
        isOpen && 'bg-blue-200'
      }`}
      aria-label={`${isOpen ? 'Open' : 'Close'} ${label}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={tw`p-2 w-12 h-12`}>
        <Icon />
      </span>
      <span className={tw`hidden md:block`}>{label}</span>
    </button>
  )
}
