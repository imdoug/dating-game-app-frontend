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
                <label>Name: </label>
                <input type="text" name="email" onChange={handleChange} defaultValue={props.user.email}/>
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