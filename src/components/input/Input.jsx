import style from './input.module.css'

export default function Input({ type, id }) {
  return (
    <input className={style.input} type={type} id={id} required />
  )
}
