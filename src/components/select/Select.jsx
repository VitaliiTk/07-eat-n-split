import Emoji from '../emoji/Emoji'
import Label from '../label/Label'
import style from './select.module.css'

export default function Select() {
  return (
    <div className={style.select}>
      <Emoji>🤑</Emoji>
      <Label htmlFor="who">Who is paying the bill?</Label>
      <select className={style['select-field']} name="" id="who">
        <option value="">You</option>
        <option value="">Friend name</option>
      </select>
    </div>
  )
}
