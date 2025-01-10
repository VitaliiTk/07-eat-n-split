import style from './InputFriend.module.css'

export default function InputFriend({ children, emoji, type }) {
  return (
    <div className={style.input}>
      <label htmlFor={children}>
        {emoji}
        {children}
      </label>
      <input type={type} id={children} />
    </div>
  )
}
