import AddForm from './components/add-form/AddForm'
import Bill from './components/bill-form/BillForm'
import FriendsList from './components/friends-list/FriendsList'

import './App.css'

function App() {
  return (
    <div className="app">
      <div>
        <FriendsList />
        <AddForm />
      </div>
      <Bill />
    </div>
  )
}

export default App
