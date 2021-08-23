import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Create from './components/Create_user'
import Edit from './components/Edit_user'
import Login from './components/Login'

function App() {
  let [users, setUsers] = useState([])
  let [currentUser, setCurrentUser] = useState({})

  let [games, setGames] = useState([])

  const getGames = () =>{
    console.log('games come here')
    axios
      .get('http://localhost:8000/api/games')
      .then(
        (response) => setGames(response.data),
        (error) => console.error(error)
      )
      .catch((error)=> console.error(error))
    }

  useEffect(() => {
    getGames()
  }, [])


  //Its working
  const getUsers = ()=>{
    console.log('users came here')
      axios
      .get('http://localhost:8000/api/useraccount')
      // .get('https://datinggameapp.herokuapp.com/api/useraccount')
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
      .post('http://localhost:8000/api/useraccount', user)
      // .post('https://datinggameapp.herokuapp.com/api/useraccount', user)
      .then((response)=>{
        console.log('im coming back')
        console.log(response)
        getUsers()
      })
  }
  //its working
  const handleUpdate = (updatedUser) =>{
    axios
      .put('http://localhost:8000/api/useraccount' + updatedUser.id, updatedUser)
      // .put('https://datinggameapp.herokuapp.com/api/useraccount/'+ updatedUser.id, updatedUser)
      .then((response)=>{
        console.log(response)
        getUsers()
      })
  }
  //its working
  const handleDelete = (user)=>{
    axios
      .delete('http://localhost:8000/api/useraccount' + user.id)
      // .delete('https://datinggameapp.herokuapp.com/api/useraccount/' + user.id)
      .then((response)=>{
        console.log(response)
        getUsers()
      })
  }
  const handleLogin = (event, user)=>{
    event.preventDefault()
    axios
      .put('http://localhost:8000/api/useraccount/login', user)
      // .put('https://datinggameapp.herokuapp.com/api/useraccount/login', user)
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
      <Login user={currentUser} handleLogin={handleLogin}/>
      <Create handleCreate={handleCreate}/>


      {users.map((user)=>{
        return(
        <div>
          <img src={user.image} alt=""/>
          <h4>{user.username}</h4>
          <li>
            <ul>Age: {user.age}</ul>
            <ul>Favorite Console: {user.fav_console}</ul>
            <ul>Favorite Games: {user.fav_games}</ul>
            <ul>Favorite Game name: {user.fav_games.name}</ul>
            <ul>Users Liked: {user.users_liked}</ul>
            <ul>User ID: {user.id}</ul>
          </li>
          <Edit handleUpdate={handleUpdate} user={user}/>
          <button onClick={(event) =>{handleDelete(user)}} value={user.id}>DELETE</button>


          {games.map((game)=>{
            return(
              <div>
                {user.fav_games == game.id &&
                  <p>{game.name}</p>
                }
                <p> all games: {game.name} </p>
              </div>
            )}
          )}


        </div>
      )}
      )}


    </>
  )
}

export default App



// {games.map((game)=>{
//   return(
//     <div>
//       <img src={game.image} alt=""/>
//       <h4>{game.name}</h4>
//       <h4>Game ID: {game.id}</h4>
//       <h4>Genre: {game.genre}</h4>
//     </div>
//   )}
// )}


// {user.fav_games == game.id &&
//   <h4>Game name: {game.name}</h4>
//
// }
// {game.id}

// <h4>Game name: {game.name}</h4>
// {/* <img src={game.image} /> */}
// <h4>Game ID: {game.id}</h4>
