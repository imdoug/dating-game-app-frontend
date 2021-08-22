import React,{useState} from "react"

const Edit = (props)=>{
    let  emptyUser = {...props.user}
    const [user, setUser] = useState(emptyUser)
    const handleChange  = (event) =>{
        setUser({...user, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(user)
        props.handleUpdate(user)
    }
    return(
        <>
        <details>
        <summary>Edit User Form</summary>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" name="username" onChange={handleChange} defaultValue={props.user.username}/>
                <br/>
                <br/>
                <label>Password</label>
                <input type="password" name="password"  onChange={handleChange}/>
                <br/>
                <br/>
                <label>Image</label>
                <input type="text" name="image"  onChange={handleChange}/>
                <br/>
                <br/>
                <label>Name</label>
                <input type="name" name="name"  onChange={handleChange}/>
                <br/>
                <br/>
                <label>Age</label>
                <input type="int" name="age"  onChange={handleChange}/>
                <br/>
                <br/>


                <input type="submit" value="EDIT USER"/>
            </form>
        </details>
        </>
    )
}

export default Edit


// <label>Favorite Console</label>
// <input type="fav_console" name="fav_console"  onChange={handleChange}/>
// <br/>
// <br/>
// <label>Favorite Games</label>
// <input type="fav_games" name="fav_games"  onChange={handleChange}/>
// <br/>
// <br/>
