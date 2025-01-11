import Select from '../select/Select'
import Button from '../button/Button'
import Title from '../title/Title'

import style from './bill-form.module.css'
import InputWrapper from '../input-wrapper/InputWrapper'
import { useState } from 'react'

export default function Bill({ friend, setFriends, friends }) {
  const [inputBillValue, setInputBillValue] = useState('')
  const [inputYourExpenseValue, setInputYourExpenseValue] = useState('')
  const [selectValue, setSelectValue] = useState(0)
  const [inputFriendExpenseValue, setInputFriendExpenseValue] =
    useState('')

  function updateFriend(friend) {
    const balance =
      selectValue === 0
        ? friend.balance -
          (Number(inputBillValue) - Number(inputYourExpenseValue))
        : friend.balance + Number(inputYourExpenseValue)

    const updateFriendData = {
      ...friend,
      balance: balance
    }

    const updateFriends = friends.filter((item) => item.id !== friend.id)

    setFriends([updateFriendData, ...updateFriends])

    setInputBillValue('')
    setInputYourExpenseValue('')
    setSelectValue(0)
  }

  // function updateFriendExpense() {
  //   setInputFriendExpenseValue(
  //     Number(inputBillValue) - Number(inputYourExpenseValue)
  //   )
  //   console.log(inputFriendExpenseValue)
  // }

  return (
    <form
      action="#"
      className={style['bill-form']}
      onSubmit={() => updateFriend(friend)}
    >
      <Title>split a bill with {friend.name}</Title>

      <InputWrapper
        emoji="💰"
        lableText="Bill value"
        inputType="number"
        inputId="bill"
        inputValue={inputBillValue}
        setInputValue={setInputBillValue}
        // updateFriendExpense={updateFriendExpense}
      />
      <InputWrapper
        emoji="👧"
        lableText="Your expense"
        inputType="number"
        inputId="yourExpense"
        inputValue={inputYourExpenseValue}
        setInputValue={setInputYourExpenseValue}
        // updateFriendExpense={updateFriendExpense}
      />
      <InputWrapper
        emoji="🧑‍🤝‍🧑"
        lableText={`${friend.name}'s expense:`}
        inputType="number"
        inputId="friendExpense"
        friend={friend}
        inputValue={
          inputBillValue || inputYourExpenseValue
            ? inputBillValue - inputYourExpenseValue
            : ''
        }
        disabled={true}
      />

      <Select
        emoji="🤑"
        friendName={friend.name}
        value={selectValue}
        setSelectValue={setSelectValue}
      >
        Who is paying the bill?
      </Select>

      <Button>Split bill</Button>
    </form>
  )
}
