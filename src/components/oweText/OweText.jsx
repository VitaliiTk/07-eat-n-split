import style from './oweText.module.css'

export default function OweText({ children }) {
  return <div className={style.oweText}>{children}</div>
}
