import { useState } from 'react'
import style from './input.module.css'

export default function Input({
  type,
  id,
  inputValue,
  setInputValue
}) {
  return (
    <input
      className={style.input}
      type={type}
      id={id}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      required
    />
  )
}
