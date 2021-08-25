import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Create from './components/Create_user'
import EditProfile from './components/Edit_profile'
import Login from './components/Login'
import Profile from "./components/profile_modal"
// import Edit from "./components/Edit_modal"
import UserInfo from './components/User-card'
import Modal from './components/Modal'

function App() {
  let [users, setUsers] = useState([])
  let [currentUser, setCurrentUser] = useState({})
  //modal states
  const [viewProfileModal, setViewProfileModal] = useState('')
  const [viewEditModal, setViewEditModal] = useState('')

  //Its working
  const getUsers = ()=>{
    console.log('users came here')
      axios
      .get('https://datinggameapp.herokuapp.com/api/useraccount')
      .then((response)=> setUsers(response.data),
      (err) => console.error(err)
      )
      .catch((error)=> console.error(error))
  }
  useEffect(()=>{
    //creating a getting the local storage information after a refresh
    const data = localStorage.getItem("current-user")
    // if there is user inside the local storage item we'll set that user to current user state
    if (data){
      //parsing the data into JSON
      setCurrentUser(JSON.parse(data))
    }
    getUsers()
  },[])
  // local storage
  useEffect(()=>{
    //creating a local storage item where we'll receive our user data after a login
    //converting to string to be readable on the local storage
    localStorage.setItem("current-user", JSON.stringify(currentUser))
  })
  //its working
  const handleCreate = (user) =>{
    console.log(user)
    axios
      .post('https://datinggameapp.herokuapp.com/api/useraccount', user)
      .then((response)=>{
        console.log('im coming back')
        console.log(response)
        getUsers()
      })
  }
  //its working
  const handleUpdate = (updatedProfile) =>{
    console.log(updatedProfile)
    axios
      .put('https://datinggameapp.herokuapp.com/api/useraccount/'+ currentUser.id, 
      {
        id: currentUser.id,
        username: currentUser.username,
        name: updatedProfile.name || currentUser.name,
        age: updatedProfile.age || currentUser.age ,
        image: updatedProfile.image || currentUser.image,
        fav_console: updatedProfile.fav_console || currentUser.fav_console,

      })
      .then((response)=>{
        console.log(response)
        getUsers()
      })
  }
  //its working
  const handleDelete = (user)=>{
    axios
      .delete('https://datinggameapp.herokuapp.com/api/useraccount/' + user.id)
      .then((response)=>{
        console.log(response)
        getUsers()
      })
  }
  const handleLogin = (event, user)=>{
    event.preventDefault()
    axios
      .put('https://datinggameapp.herokuapp.com/api/useraccount/login', user)
      .then((response)=>{
        setCurrentUser(response.data)
        console.log(response)
        getUsers()
      })
  }
  const handleLogout = () =>{
    console.log(currentUser)
    setCurrentUser('')
    // clearing the local storage once the user logs out
    localStorage.clear("current-user")
  }
  const modal = () =>{
    document.querySelector('.edit-modal-box').classList.toggle('hidden')
  }
  const profilePreview = () =>{
    document.querySelector('.profile-modal-box').classList.toggle('hidden')
  }
  return (
    <>
      <div className="logo">
        <img src="https://i.ibb.co/2PtmYZg/logo-gameon.png"/>
      </div>
      {currentUser
      ?
      <> 
      <UserInfo user={currentUser} handleLogout={handleLogout} data={users} openModal={modal} modal={profilePreview}/>
      {/* when user is logged in  */}
      </>
      :
      <>
        <div className="main-container">
          <div className="box1">
        <Create handleCreate={handleCreate}/>
        {/* {users.map((user)=>{
          return(
            <>
                <div className="user-card">

                  <Profile data={user} onClose={() => setViewProfileModal(false)}
                    viewProfileModal={viewProfileModal}/>

                  {viewEditModal === user.id &&
                  <EditProfile user={currentUser} onClose={() => setViewEditModal(false)}
                    viewEditModal={viewEditModal}/>
                  }

                  <h4>{user.username}</h4>

                  <button onClick={() => setViewProfileModal(user.id)} > View Profile </button>
                  <button onClick={() => setViewEditModal(user.id)} > Edit Profile </button>
                  <button onClick={(event) =>{handleDelete(user)}} value={user.id}>DELETE</button>
                </div>
            </>
        )}
        )} */}
        </div>
        <div className="box2">
        <Login user={currentUser} handleLogin={handleLogin}/>
      </div>
    </div>
    </>
    }
    <Profile data={currentUser} onClose={profilePreview}/>
    {
      <EditProfile user={currentUser} onClose={modal}  handleUpdate={handleUpdate}/>
    }
    <Modal/>
    </>
  )
}

export default App

//we had this in our map but I am putting it here for now just in case I break something and need to put it back and leaving it in the fragments looks weird
// <EditProfile handleUpdate={handleUpdate} user={user}/>
