import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Create from './components/Create_user'
import EditProfile from './components/Edit_profile'
import Login from './components/Login'
import Profile from "./components/profile_modal"
import Game from "./components/Games"

function App() {
  let [users, setUsers] = useState([])
  let [currentUser, setCurrentUser] = useState({})
  let [games, setGames] = useState([])
  //modal states
  const [viewProfileModal, setViewProfileModal] = useState('')
  const [viewEditModal, setViewEditModal] = useState('')
  const [viewGamesModal, setViewGamesModal] = useState('')

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

  const getGames = () => {
    console.log('games stuff')
      axios
        .get('https://datinggameapp.herokuapp.com/api/games')
        .then((response) => setGames(response.data),
        (error) => console.error(error))
        .catch((error) => console.error(error))
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
    getGames()
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
    axios
      .put('https://datinggameapp.herokuapp.com/api/useraccount/'+ updatedProfile.id, updatedProfile)
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
  return (
    <>
      <h1>Welcome to The Dating Game!</h1>
      {currentUser && <button onClick={handleLogout}>LOGOUT!</button>}
      <div className="main-container">
        <div className="box1">
      <Create handleCreate={handleCreate}/>
      {users.map((user)=>{
        return(
          <>
              <div className="user-card">

                <Profile data={user} onClose={() => setViewProfileModal(false)}
                  viewProfileModal={viewProfileModal}/>

                {viewEditModal === user.id &&
                <EditProfile handleUpdate={handleUpdate} user={user} onClose={() => setViewEditModal(false)}
                  viewEditModal={viewEditModal}/>
                }

                {viewGamesModal === user.id &&
                <Game handleCreate={handleCreate} handleUpdate={handleUpdate} games={games} onClose={() => setViewGamesModal(false)}
                  viewGamesModal={viewGamesModal}/>
                }

                <h4>{user.username}</h4>



                  {user.fav_games.map((faved_game)=>{
                    return(
                      <div className="display-fav_games">
                        {/* Map over all games, then, selectively render */}
                          {games.map((game)=>{
                            return(
                              <div>
                                {faved_game === game.id &&
                                  <ul>
                                    <li>{game.name}</li>
                                  </ul>
                                }
                              </div>
                            )}
                          )}
                        </div>
                    )}
                  )}



                <button onClick={() => setViewProfileModal(user.id)} > View Profile </button>
                <button onClick={() => setViewEditModal(user.id)} > Edit Profile </button>
                <button onClick={() => setViewGamesModal(user.id)} > Edit Games </button>
                <button onClick={(event) =>{handleDelete(user)}} value={user.id}>DELETE</button>
              </div>
          </>
      )}
      )}
      </div>
      <div className="box2">
      <Login user={currentUser} handleLogin={handleLogin}/>
    </div>
  </div>
    </>
  )
}

export default App

//we had this in our map but I am putting it here for now just in case I break something and need to put it back and leaving it in the fragments looks weird
// <EditProfile handleUpdate={handleUpdate} user={user}/>
