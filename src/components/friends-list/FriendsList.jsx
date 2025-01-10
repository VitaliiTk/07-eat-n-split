import Friend from './Friend/Friend'
import style from './FriendsList.module.css'

// data
import friends from '../../friendsData'

export default function FriendsList() {
  return (
    <ul className={style.friends}>
      {friends.map((friend) => (
        <Friend
          key={friend.name}
          name={friend.name}
          photo={friend.imgSrc}
          owe={friend.owe}
        />
      ))}
    </ul>
  )
}
