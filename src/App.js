import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Create from './components/Create_user'

function App() {
  let [users, setUsers] = useState({})

  const getUsers = ()=>{
    console.log('users came here')
  //     axios.get('http://localhost:8000')
  //     .then((repsonse)=> setUsers(response.data),
  //     (err) => console.error(err)
  //     )
  //     .catch((error)=> console.error(erro))
  }
  useEffect(()=>{
    // getUsers()
  })
  const handleCreate = () =>{
    axios
      .post('http://localhost:8000')
      .then((response)=>{
        console.log(response)
        getUsers()
      })
  }
  return (
    <>
      <h1>Welcome to The Dating Game!</h1>
      <Create handleCreate={handleCreate}/>
    </>
  )
}

export default App
