import React,{useState} from "react"


const Edit = (props)=>{
    let  emptyUser = {...props.user}
    const [user, setUser] = useState(emptyUser)
    let [uploadPictue, setUploadPicture]= useState([])
    const handleChange  = (event) =>{
        setUser({...user, [event.target.name]: event.target.value})
    }
    // const fileSelectedHandler = (event) =>{
    //     console.log(event.target.files[0])
    //     setUploadPicture(event.target.files[0])
    //   }
    // const fileUploadHandler = ()=>{
    //     console.log(uploadPictue)
    //     user.image = uploadPictue
    // }
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
                {/* <input type='file' name="image" onChange={fileSelectedHandler}/> */}
                <input type="submit" value="EDIT USER" />
            </form>
        </details>
        </>
    )
}

export default Edit