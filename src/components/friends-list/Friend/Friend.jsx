import style from './Friend.module.css'

import Button from '../../button/Button'
import CirclePicture from '../../circle-picture/CirclePicture'
import FriendName from '../../friend-name/FriendName'
import OweText from '../../owe-text/OweText'

export default function Friend({ name, photo, balance }) {
  return (
    <li className={style.friend}>
      <CirclePicture imageSRC={photo} />
      <div className={style.info}>
        <FriendName>{name}</FriendName>

        <OweText>{balance}</OweText>
      </div>
      <Button>Select</Button>
    </li>
  )
}
