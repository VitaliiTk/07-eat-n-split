import style from './AddForm.module.css'
import Button from '../button/Button'
import InputWrapper from '../input-wrapper/InputWrapper'
import { useState } from 'react'
import Title from '../title/Title'

export default function AddForm({ setFriends, setIsAddFormOpen }) {
  const [inputValueName, setInputValueName] = useState('')
  const [inputValueImage, setInputValueImage] = useState('')

  function handleAddFriend(e) {
    e.preventDefault()

    const newFriend = {
      id: Math.floor(100000 + Math.random() * 900000),
      name: inputValueName,
      image: inputValueImage,
      balance: 0
    }

    setFriends((prevFriends) => [...prevFriends, newFriend])

    console.log(newFriend)

    setInputValueName('')
    setInputValueImage('')
    setIsAddFormOpen(false)
  }

  return (
    <>
      <form
        action="#"
        className={style.addForm}
        onSubmit={handleAddFriend}
      >
        <Title>Add new friend</Title>
        <InputWrapper
          emoji="🧑‍🤝‍🧑"
          lableText="Friend name"
          inputType="text"
          inputId="friendName"
          inputValue={inputValueName}
          setInputValue={setInputValueName}
        />
        <InputWrapper
          emoji="🖼️"
          lableText="Image URL"
          inputType="url"
          inputId="imageUrl"
          inputValue={inputValueImage}
          setInputValue={setInputValueImage}
        />

        <Button>Add</Button>
      </form>
    </>
  )
}
