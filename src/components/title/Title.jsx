import style from './title.module.css'

export default function Title({ children }) {
  return <div className={style.title}>{children}</div>
}
