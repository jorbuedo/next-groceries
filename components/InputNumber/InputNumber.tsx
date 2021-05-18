import { useEffect, useState } from 'react'
import { tw, apply } from 'twind'
import { css } from 'twind/css'

const btn = apply`text-2xl font-thin hover:bg-gray-100 h-full w-20 outline-none focus:outline-none focus-visible:ring-2`
const noArrows = css({
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: '0',
  },
  '-moz-appearance': 'textfield',
})

type InputNumberProps = {
  min?: number
  max?: number
  step?: number
  defaultValue?: number
  value?: number
  onChange?: (n: number) => void
}

export default function InputNumber({
  min,
  max,
  step = 1,
  defaultValue = 0,
  value,
  onChange,
}: InputNumberProps) {
  const [innerValue, setInnerValue] = useState<number>(defaultValue)
  useEffect(() => {
    if (onChange) {
      onChange(innerValue)
    }
  }, [innerValue])

  const handleClick = (increment: number) => {
    setInnerValue((current) => {
      let next = current + increment
      if (max !== undefined && next > max) {
        next = max
      }
      if (min !== undefined && next < min) {
        next = min
      }
      return next
    })
  }

  return (
    <div className="flex flex-row border h-8 w-24 rounded">
      <button
        type="button"
        aria-label="decrement"
        className={tw`${btn}`}
        onClick={() => handleClick(step * -1)}
      >
        <span>−</span>
      </button>
      <input
        {...(min !== undefined && { min })}
        {...(max !== undefined && { max })}
        value={value !== undefined ? value : innerValue}
        disabled
        type="number"
        className={tw`${noArrows} bg-transparent font-semibold text-center w-full outline-none focus-visible:ring-2`}
      />
      <button
        type="button"
        aria-label="increment"
        className={tw`${btn}`}
        onClick={() => handleClick(step)}
      >
        <span>+</span>
      </button>
    </div>
  )
}
