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
    }
    return(
        <>
        <div className="container-master">
          <div className="profile-box">
            <form onSubmit={handleSubmit}>
              <div className="edit-image">
                <label htmlFor="image">Image: </label>
                <input type="url" name="image" onChange={handleChange}/>
              </div>
              <div className="edit-name">
                  <label htmlFor="name">Name: </label>
                  <input type="text" name="name" onChange={handleChange}/>
              </div>
              <div className="edit-age">
                  <label htmlFor="age">Age: </label>
                  <input type="text" name="age" onChange={handleChange}/>
              </div>
              <div className="edit-fav-console">
                  <label htmlFor="fav_console">Favorite Console: </label>
                  <input type="text" name="fav_console" onChange={handleChange}/>
              </div>
              <div className="edit-btn">
                <input type="submit" value="Edit Profile"/>
              </div>
          </form>
        </div>
      </div>
        </>
    )
}

export default EditProfile
