import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Create from './components/Create_user'
import Edit from './components/Edit_user'

function App() {
  let [users, setUsers] = useState({})

  const getUsers = ()=>{
    console.log('users came here')
      axios
      .get('https://datinggameapp.herokuapp.com/api/users')
      .then((repsonse)=> setUsers(response.data),
      (err) => console.error(err)
      )
      .catch((error)=> console.error(erro))
  }
  useEffect(()=>{
     getUsers()
  })
  const handleCreate = (user) =>{
    axios
      .post('https://datinggameapp.herokuapp.com/api/users')
      .then((response)=>{
        console.log(response)
        getUsers()
      })
  }
  const handleUpdate = (user) =>{
    axios
      .put('https://datinggameapp.herokuapp.com/api/users'+ user.id, user)
      .then((response)=>{
        console.log(response)
        getUsers()
      })
  }
  const handleDelete = (user)=>{
    axios
      .delete('https://datinggameapp.herokuapp.com/api/users' + user.id)
      .then((response)=>{
        console.log(response)
        getUsers()
      })
  }

  return (
    <>
      <h1>Welcome to The Dating Game!</h1>
      <Create handleCreate={handleCreate}/>
      {users.map((user)=>{
        <div>
          <h4>Username</h4>
          <Edit handleUpdate={handleUpdate} user={user}/>
          <button onClick={handleDelete}>DELETE</button>
        </div>
      })}
    </>
  )
}

export default App
