import Title from '../title/Title'
import Friend from './Friend/Friend'
import style from './FriendsList.module.css'

export default function FriendsList({ friends }) {
  return (
    <ul className={style.friends}>
      <Title>Friends</Title>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          name={friend.name}
          photo={friend.image}
          balance={friend.balance}
        />
      ))}
    </ul>
  )
}
