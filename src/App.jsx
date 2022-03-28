import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {AddMeetup} from "./Components/AddMeetup/AddMeetup"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <AddMeetup/>
    </div>
  )
}

export default App
