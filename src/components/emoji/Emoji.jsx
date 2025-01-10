import style from './emoji.module.css'

export default function Emoji({ children }) {
  return <div className={style.emoji}>{children}</div>
}
