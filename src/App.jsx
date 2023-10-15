
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({})
  useEffect(()=>{
    fetch('http://localhost:5000/')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return (
    <>
      <h1>User server Management</h1>
      <h1>Here is the user server: {user.length}</h1>
    </>
  )
}

export default App
