import React from "react"

const Profile = (props) => {

  if(!props.viewProfileModal){
    return null
  }

  return(
    <>
      {props.viewEditModal === props.data.id &&
        <div className="profile-modal-box" onClick={props.onClose}>
          <div className="profile-modal-content" onClick={event => event.stopPropagation()}>
            <h2>{props.data.username}</h2><br/>
            <img src={props.data.image} alt="</3"/><br/>
            <div className="profile-modal-body">
              <h4 className="profile-modal-info">Age: {props.data.age} </h4><br/>
              <h4 className="profile-modal-info">Favorite Console: {props.data.fav_console} </h4><br/>
              <h4 className="profile-modal-info">Favorite Games: {props.data.fav_games} </h4><br/>
            </div>
            <div className="profile-modal-footer">
              <button onClick={props.onClose} className="buttons">Close</button>
            </div>
          </div>
        </div>
      }
    </>
  )

}

export default Profile
