import React from "react"

const Profile = (props) => {

  return(
    <>
        <div className="profile-modal-box hidden" onClick={props.onClose}>
          <div className="profile-modal-content2" onClick={event => event.stopPropagation()}>
          <div className="carousel2">
                        <div className="card-pic2" style={{backgroundimage: `${props.data.image}`}}>
                            <div className="user-info">
                                <div className="btns">
                                    <div className="btn-left"><i class="fa fa-close"></i></div>
                                    <div className="btn-right"><i class="fa">&#xf10c;</i></div>
                                </div>
                                <h3>{props.data.name}, {props.data.age}</h3>
                                <p><span>{props.data.location}</span></p>
                                {/* map over fav games  */}
                            </div>
                        </div>
                    </div>
          </div>
        </div>
    </>
  )

}

export default Profile
