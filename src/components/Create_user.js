import React, {useState, useEffect} from 'react'

const Create = (props) =>{
    let  emptyUser = {username: '', password: ''}
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
                <label>Name: </label>
                <input type="text" name="username" onChange={handleChange}/>
                <br/>
                <br/>
                <label>Password</label>
                <input type="password" name="password"  onChange={handleChange}/>
                <br/>
                <br/>
                <input type="submit" value="CREATE NEW USER"/>
            </form>
      </details>
        </>
    )
}

export default Create