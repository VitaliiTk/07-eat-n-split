import AddForm from './components/add-form/AddForm'
import BillForm from './components/bill-form/BillForm'
import FriendsList from './components/friends-list/FriendsList'

import './App.css'
import Button from './components/button/Button'

// data
import initialFriends from './initial-friends'
import { useState } from 'react'

function App() {
  const [friends, setFriends] = useState(initialFriends)

  const [isAddFormOpen, setIsAddFormOpen] = useState(false)

  const [isSplitOpen, setIsSplitOpen] = useState(false)

  const [curOpen, setCurOpen] = useState(null)

  return (
    <div className="app">
      <div className="app-inner">
        <FriendsList
          friends={friends}
          setIsSplitOpen={setIsSplitOpen}
          isSplitOpen={isSplitOpen}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        />

        {isAddFormOpen && (
          <AddForm
            setFriends={setFriends}
            setIsAddFormOpen={setIsAddFormOpen}
          />
        )}

        <Button onClick={() => setIsAddFormOpen((prev) => !prev)}>
          {isAddFormOpen ? `Close` : `Add friend`}
        </Button>
      </div>
      {isSplitOpen && (
        <BillForm
          friend={friends.find((friend) => friend.id === curOpen)}
          setFriends={setFriends}
          friends={friends}
        />
      )}
    </div>
  )
}

export default App
