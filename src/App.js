import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Create from './components/Create_user'
import EditProfile from './components/Edit_profile'
import Login from './components/Login'
// import NewProfile from './components/Create_profile'

function App() {
  let [users, setUsers] = useState([])
  let [currentUser, setCurrentUser] = useState({})
  // let [profile, setCurrentProfile] = useState([])


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


  // render() {
  //   const isLoggedIn = this.state.isLoggedIn;
  //   let button;
  //   if (isLoggedIn) {
  //     button = <LogoutButton onClick={this.handleLogoutClick} />;
  //   } else {
  //     button = <LoginButton onClick={this.handleLoginClick} />;
  //   }
  // }

  // games.map((game)=>{
  //   console.log(game.name, game.genre)
  // })

  // for(let i = 0; i < games.size; i++){
  //   console.log(games[i].id)
  // }

  // users.map((user) => {
  //   console.log(user.username, user.fav_games, user.id)
  //
  //   for(let i = 0; i < user.fav_games.size; i++){
  //     // if (user.fav_games[i] == game.id){
  //     //
  //     // }
  //   }
  // })

  for(let i = 0; i < games.size; i++){
    console.log("here is a game: ", games[i])
  }

  // const compare = (user_id, userFavGames, allGames) =>{
  //
  //   for(let i = 0; i < userFavGames.size; i++){
  //     if userFavGames[i] ==
  //   }
  // }

  return (
    <>
      <h1>Welcome to The Dating Game!</h1>
      {currentUser && <button onClick={handleLogout}>LOGOUT!</button>}
      <div className="main-container">
        <div className="box1">
      <Create handleCreate={handleCreate}/>


      {users.map((user)=>{
        return(
        <div>
          <img src={user.image} alt=""/>
          <h4> Username: {user.username}</h4>
          <p> fav games: {user.fav_games}</p>
          { /* <p> fav games: {user.fav_games[0]}</p> */ }
          <button onClick={(event) =>{handleDelete(user)}} value={user.id}>DELETE</button>


          { /*}
          {games.map((game)=>{
            return(
              <div>
                {user.fav_games == game.id &&
                  <p>fav games {game.name}</p>
                }
                <p> all games: {game.name} </p>
              </div>
            )}
          )}

          */}











        </div>
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


// {for(let i = 0; i < {user.fav_games.size}; i++)
//   console.log("this user's fav games are", user.fav_games[i])
//
// }




// {user.fav_games.map((favedgame)=>{
//   return(
//     <div>
//       <p> this user's fav_games are: {favedgame} </p>
//
//
//       {games.map((game)=>{
//         return(
//           <div>
//             {favedgame == game.id &&
//               <p>this users's fav_games' names are: {game.name}</p>
//             }
//           </div>
//         )
//       })}
//     </div>
//   )
// })}
