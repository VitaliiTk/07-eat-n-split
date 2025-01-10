import InputFriend from './InputFriend'
import style from './AddForm.module.css'
import Button from '../button/Button'

export default function AddForm() {
  return (
    <>
      <form action="#" className={style.addForm}>
        <InputFriend emoji="🧑‍🤝‍🧑" type="text">
          Friend name
        </InputFriend>
        <InputFriend emoji="🖼️" type="url">
          Image URL
        </InputFriend>
        <div className={style.right}>
          <Button>Add</Button>
        </div>
      </form>
      <Button>Close</Button>
    </>
  )
}
