import Friend from './Friend/Friend'
import style from './FriendsList.module.css'
import friends from '../../friendsData'

export default function FriendsList() {
  return (
    <div>
      <ul className={style.list}>
        {friends.map((friend) => (
          <Friend
            key={friend.name}
            name={friend.name}
            photo={friend.imgSrc}
            owe={friend.owe}
          />
        ))}
      </ul>
    </div>
  )
}
