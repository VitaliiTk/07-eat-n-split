import style from './owe-text.module.css'

export default function OweText({ children }) {
  return <p className={style.oweText}>{children}</p>
}
