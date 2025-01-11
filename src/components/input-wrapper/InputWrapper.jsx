import Emoji from '../emoji/Emoji'
import Input from '../input/Input'
import Label from '../label/Label'

import styles from './input-wrapper.module.css'

export default function InputWrapper({
  emoji,
  lableText,
  inputType,
  inputId,
  inputValue,
  setInputValue
}) {
  return (
    <div className={styles['input-wrapper']}>
      <Emoji>{emoji}</Emoji>
      <Label htmlFor={inputId}>{lableText}</Label>
      <Input
        type={inputType}
        id={inputId}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  )
}
