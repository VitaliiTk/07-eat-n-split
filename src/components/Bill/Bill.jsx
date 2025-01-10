import Select from '../../select/Select'
import Button from '../button/Button'
import Input from '../input/Input'

import style from './bill.module.css'

export default function Bill() {
  return (
    <div className={style.bill}>
      <h2 className={style.title}>Split a bill with X-NAME</h2>
      <form action="#">
        <Input type="number" emoji="💰">
          Bill value
        </Input>

        <Input type="number" emoji="👧">
          Your expense
        </Input>

        <Input type="number" emoji="🧑‍🤝‍🧑">
          Name's expense:
        </Input>

        {/* Select must be create */}
        <Select emoji="🤑">Who is paying the bill?</Select>

        <Button>Split bill</Button>
      </form>
    </div>
  )
}
