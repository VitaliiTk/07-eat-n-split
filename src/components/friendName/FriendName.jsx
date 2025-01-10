import style from './friendName.module.css'

export default function FriendName({ children }) {
  return <h3 className={style.FriendName}>{children}</h3>
}
