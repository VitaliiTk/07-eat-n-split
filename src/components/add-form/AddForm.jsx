import style from './AddForm.module.css'
import Button from '../button/Button'
import InputWrapper from '../input-wrapper/InputWrapper'

export default function AddForm() {
  return (
    <>
      <form action="#" className={style.addForm}>
        <InputWrapper
          emoji="🧑‍🤝‍🧑"
          lableText="Friend name"
          inputType="text"
          inputId="friendName"
        />
        <InputWrapper
          emoji="🖼️"
          lableText="Image URL"
          inputType="url"
          inputId="imageUrl"
        />

        <Button>Add</Button>
      </form>

      <Button>Close</Button>
    </>
  )
}
