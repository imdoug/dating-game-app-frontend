import React,{useState} from "react"

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
        props.onClose()
    }
    return(
        <>

        <h2>Edit Profile Form</h2>
          <div className="edit-modal-box" onClick={props.onClose}>
            <div className="edit-modal-content" onClick={event => event.stopPropagation()}>
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
                <label htmlFor="location">Location: </label>
                <input type="text" name="location" onChange={handleChange}/>
              <br />
                <label htmlFor="fav_console">Favorite Console: </label>
                <input type="text" name="fav_console" onChange={handleChange}/>
              <br />
                <button type="submit" value="Edit Profile">Submit Changes</button>
              </form>
              <div className="profile-modal-footer">
                <button onClick={props.onClose} className="buttons">Close</button>
              </div>
            </div>
          </div>
        </>
    )
}

export default EditProfile
