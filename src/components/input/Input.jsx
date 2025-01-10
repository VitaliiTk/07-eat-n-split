import style from './input.module.css'

export default function Input({ children, emoji, type }) {
  return (
    <div className={style.input}>
      <label htmlFor={children}>
        {emoji}
        {children}
      </label>
      <input type={type} id={children} required />
    </div>
  )
}
