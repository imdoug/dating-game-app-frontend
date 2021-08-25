import React, {useState} from 'react'

const Game = (props) => {
  let emptyGame = {name: '', image: '', genre: ''}
  const [games, setGames] = useState(emptyGame)

  const handleChange = (event) => {
    setGames({...games, [event.target.name]:event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(games)
    props.handleCreate(games)
    props.onClose()
  }



  return (
    <>
      <h2>Favorite Games:</h2>
        <div className="edit-modal-box" onClick={props.onClose}>
          <div className="edit-modal-content" onClick={event => event.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <label>Name: </label>
              <input type="text" name="name" onChange={handleChange}/>
              <br/>
              <label>Image: </label>
              <input type="url" name="image" onChange={handleChange}/>
              <br/>
              <label>Genre: </label>
              <input type="text" name="genre" onChange={handleChange}/>
              <br />
              <button type="submit" value="Edit Games">Submit Changes</button>
            </form>
            <div className="profile-modal-footer">
              <button onClick={props.onClose} className="buttons">Close</button>
            </div>
          </div>
        </div>
    </>
  )

}

export default Game
