import React, {useState} from 'react'

const Login = (props) =>{
    let  emptyUser = {...props.user}
    const [user, setUser] = useState(emptyUser)
    const handleChange  = (event) =>{
        setUser({...user, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(user)
        props.handleLogin(event, user)
    }
    return (
        <>
        <details>
        <summary>Login</summary>
            <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type="text" name="username" onChange={handleChange}/>
            <br />
            <label>Password: </label>
            <input type="password" name="password" onChange={handleChange}/>
            <br />
            <input type="submit" value="LOGIN"/>
        </form>
      </details>
        </>
    )
}

export default Login