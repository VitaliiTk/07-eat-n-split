import style from './Friend.module.css'

import Button from '../../button/Button'
import CirclePicture from '../../circle-picture/CirclePicture'
import FriendName from '../../friend-name/FriendName'
import OweText from '../../owe-text/OweText'

export default function Friend({
  name,
  photo,
  balance,
  setIsSplitOpen,
  isSplitOpen,
  id,
  curOpen,
  setCurOpen
}) {
  const isOpen = id === curOpen

  function handleToogle(curId) {
    // setIsSplitOpen((prev) => !prev)

    setCurOpen(isOpen ? null : curId)
    setIsSplitOpen(true)

    if (curOpen === curId) setIsSplitOpen(false)

    // console.log(curOpen)
  }

  let text = ''

  if (balance > 0) {
    text = `You owe ${name} ${balance}$`
  }

  if (balance < 0) {
    text = `${name} owes you ${Math.abs(balance)}$`
  }

  if (balance === 0) {
    text = `no debts`
  }

  return (
    <li className={style.friend}>
      <CirclePicture imageSRC={photo} />
      <div className={style.info}>
        <FriendName>{name}</FriendName>

        <OweText>{text}</OweText>
      </div>
      <Button
        onClick={() => {
          handleToogle(id)
        }}
      >
        {isOpen ? `Close` : `Select`}
      </Button>
    </li>
  )
}
