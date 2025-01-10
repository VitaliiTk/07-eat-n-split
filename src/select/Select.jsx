import style from './select.module.css'

export default function Select({ children, emoji }) {
  return (
    <div className={style.select}>
      <label htmlFor="who">
        {emoji}
        {children}
      </label>
      <select name="" id="who">
        <option value="">You</option>
        <option value="">Friend</option>
      </select>
    </div>
  )
}
