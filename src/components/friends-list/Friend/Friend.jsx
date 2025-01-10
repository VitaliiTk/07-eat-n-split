import Button from '../../button/Button'
import style from './Friend.module.css'

export default function Friend({ name, photo, owe }) {
  return (
    <li className={style.friendItem}>
      <img className={style.img} src={photo} alt="photo" />
      <div className={style.info}>
        <h3 className={style.name}>{name}</h3>
        <p className="text">
          {owe > 0
            ? `${name} owes you ${owe}$`
            : `You and ${name} are even`}{' '}
        </p>
      </div>
      <Button>Select</Button>
    </li>
  )
}
