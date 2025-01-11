import { useState } from 'react'
import Title from '../title/Title'
import Friend from './Friend/Friend'
import style from './FriendsList.module.css'

export default function FriendsList({
  friends,
  setIsSplitOpen,
  isSplitOpen,
  curOpen,
  setCurOpen
}) {
  return (
    <ul className={style.friends}>
      <Title>Friends</Title>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          name={friend.name}
          photo={friend.image}
          balance={friend.balance}
          setIsSplitOpen={setIsSplitOpen}
          isSplitOpen={isSplitOpen}
          id={friend.id}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        />
      ))}
    </ul>
  )
}
