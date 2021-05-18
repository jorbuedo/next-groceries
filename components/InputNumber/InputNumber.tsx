import { InputHTMLAttributes } from 'react'
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

export default function InputNumber(
  props: InputHTMLAttributes<HTMLInputElement>,
) {
  return (
    <div className="flex flex-row border h-10 w-32 rounded">
      <button type="button" aria-label="decrement" className={tw`${btn}`}>
        <span>−</span>
      </button>
      <input
        type="number"
        className={tw`${noArrows} font-semibold text-center w-full outline-none focus-visible:ring-2`}
        {...props}
      />
      <button type="button" aria-label="increment" className={tw`${btn}`}>
        <span>+</span>
      </button>
    </div>
  )
}

/*
<style>
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .custom-number-input input:focus {
    outline: none !important;
  }

  .custom-number-input button:focus {
    outline: none !important;
  }
</style>

<script>
  function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
  }

  function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

  const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
  );

  const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
  );

  decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
  });

  incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
  });
</script>

*/
