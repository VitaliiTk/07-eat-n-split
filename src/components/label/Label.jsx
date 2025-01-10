import style from './label.module.css'

export default function Label({ children, htmlFor }) {
  return (
    <label className={style.label} htmlFor={htmlFor}>
      {children}
    </label>
  )
}
