import style from './AddForm.module.css'
import Button from '../button/Button'
import Input from '../input/Input'

export default function AddForm() {
  return (
    <>
      <form action="#" className={style.addForm}>
        <Input emoji="🧑‍🤝‍🧑" type="text">
          Friend name
        </Input>
        <Input emoji="🖼️" type="url">
          Image URL
        </Input>
        <div className={style.right}>
          <Button>Add</Button>
        </div>
      </form>
      <Button>Close</Button>
    </>
  )
}
