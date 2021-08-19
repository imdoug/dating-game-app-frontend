import React,{useState} from "react"

const Edit = ()=>{
    let  emptyUser = {username: '', password: ''}
    const [user, setUser] = useState(emptyUser)
    const handleChange  = (event) =>{
        setUser({...user, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(user)
        // props.handleUpdate(user)
    }    
    return(
        <>
        <details>
        <summary>Edit User Form</summary>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="username" onChange={handleChange}/>
                <br/>
                <br/>
                <label>Password</label>
                <input type="password" name="password"  onChange={handleChange}/>
                <br/>
                <br/>
                <input type="submit" value="EDIT USER"/>
            </form>
        </details>
        </>
    )
}

export default Edit