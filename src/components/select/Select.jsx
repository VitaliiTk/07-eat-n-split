import Emoji from '../emoji/Emoji'
import Label from '../label/Label'
import style from './select.module.css'

export default function Select({ friendName, value, setSelectValue }) {
  return (
    <div className={style.select}>
      <Emoji>🤑</Emoji>
      <Label htmlFor="who">Who is paying the bill?</Label>
      <select
        className={style['select-field']}
        name=""
        id="who"
        value={value}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option value="0">You</option>
        <option value="1">{friendName}</option>
      </select>
    </div>
  )
}
