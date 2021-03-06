import React,{useState} from "react"

const EditProfile = (props)=>{
    let  emptyUser = { ...props.user}
    const [user, setUser] = useState({ ...emptyUser})
    const handleChange  = (event) =>{
        setUser({ ...user, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) =>{
        user.id = props.user.id
        user.username = props.user.username
        user.password = props.user.password
        event.preventDefault()
        console.log(user)
        props.handleUpdate(user)
        props.onClose()
        event.currentTarget.reset()
    }
    const deleteUser = () =>{
      props.handleDelete(props.user)
    }
    return(
        <>
          <div className="edit-modal-box hidden" onClick={props.onClose}>
            <div className="edit-modal-content" onClick={event => event.stopPropagation()}>
            <p onClick={props.onClose} className="close-btn"><i class="fa fa-times-circle"></i></p>
            <p className="form-title">EDIT FORM</p>
              <form onSubmit={handleSubmit}>
                <div className="edit-form-row">
                  <p>Profile Picture</p>
                  <input type="url" name="image" onChange={handleChange} placeholder={props.user.image}/>
                </div>
                <div className="edit-form-row">
                  <p htmlFor="name">Name </p>
                  <input type="text" name="name" onChange={handleChange} placeholder={props.user.name}/>
                </div>
                <div className="edit-form-row">
                  <p htmlFor="age">Age </p>
                  <input type="text" name="age" onChange={handleChange} placeholder={props.user.age}/>
                </div>
                <div className="edit-form-row">
                  <p htmlFor="fav_console">Favorite Console </p>
                  <input type="text" name="fav_console" onChange={handleChange} placeholder={props.user.fav_console}/>
                </div>
                <div className="edit-form-row">
                  <p htmlFor="location">Location </p>
                  <input type="text" name="location" onChange={handleChange} placeholder={props.user.location}/>
                </div>
                <div>
                  <button className="sub-edit"type="submit">Submit Changes</button>
                </div>
              </form>
            </div>
          </div>
        </>
    )
}

export default EditProfile
