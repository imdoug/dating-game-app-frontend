import React, {useState} from 'react'

const Game = (props) => {
  let emptyGame = {name: '', image: '', genre: ''}
  const [game, setGame] = useState(emptyGame)

  const handleChange = (event) => {
    setGame({...game, [event.target.name]:event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(game)
    props.handleCreate(game)
  }

  return (
    <>
    <details>
      <summary>Favorite Games:</summary>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" onChange={handleChange}/>
        <br/>
        <label>Image: </label>
        <input type="url" name="image" onChange={handleChange}/>
        <br/>
        <label>Genre: </label>
        <input type="text" name="genre" onChange={handleChange}/>
      </form>
    </details>
    </>
  )

}

export default Game
