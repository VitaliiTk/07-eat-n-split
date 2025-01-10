import Select from '../select/Select'
import Button from '../button/Button'
import Input from '../input/Input'
import Title from '../title/Title'

import style from './bill-form.module.css'
import InputWrapper from '../input-wrapper/InputWrapper'

export default function Bill() {
  return (
    <form action="#" className={style['bill-form']}>
      <Title>split a bill with name-x</Title>

      <InputWrapper
        emoji="💰"
        lableText="Bill value"
        inputType="number"
        inputId="bill"
      />
      <InputWrapper
        emoji="👧"
        lableText="Your expense"
        inputType="number"
        inputId="yourExpense"
      />
      <InputWrapper
        emoji="🧑‍🤝‍🧑"
        lableText="Name's expense:"
        inputType="number"
        inputId="friendExpense"
      />

      {/* Select must be create */}
      <Select emoji="🤑">Who is paying the bill?</Select>

      <Button>Split bill</Button>
    </form>
  )
}
