import React, {useState} from 'react'

const Create = (props) =>{
    let  emptyUser = {username: '', password: '', age: '', fav_console: '',image: '',name: '',fav_games: [], users_liked: []}
    const [user, setUser] = useState(emptyUser)
    const handleChange  = (event) =>{
        setUser({...user, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(user)
        props.handleCreate(user)
    }
    return (
        <>
        <details>
            <summary>New User Form</summary>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password"  onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor="image">Image: </label>
                <input type="url" name="image"  onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor="age">Age: </label>
                <input type="text" name="age"  onChange={handleChange}/>
                <br/>
                <br/>
                <label htmlFor="fav_console">Favorite Console: </label>
                <input type="text" name="fav_console"  onChange={handleChange}/>
                <br/>
                <br/>
                <input type="submit" value="CREATE NEW USER"/>
            </form>
      </details>
        </>
    )
}

export default Create
