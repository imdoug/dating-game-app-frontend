import React,{useState} from "react"
// import Game from './Games'


const EditProfile = (props)=>{
    let  emptyProfile = {...props.user}
    const [profile, setProfile] = useState(emptyProfile)
    const handleChange  = (event) =>{
        setProfile({...profile, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(profile)
        props.handleUpdate(profile)
    }
    return(
        <>
        <details>
        <summary>Edit Profile Form</summary>
          <form onSubmit={handleSubmit}>
            <label htmlFor="image">Image: </label>
            <input type="url" name="image" onChange={handleChange}/>
          <br />
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" onChange={handleChange}/>
          <br />
            <label htmlFor="age">Age: </label>
            <input type="text" name="age" onChange={handleChange}/>
          <br />
            <label htmlFor="fav_console">Favorite Console: </label>
            <input type="text" name="fav_console" onChange={handleChange}/>
          <br />
            <input type="submit" value="Edit Profile"/>
          </form>
        </details>
        </>
    )
}

export default EditProfile
