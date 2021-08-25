import React, {useState} from 'react'

const UserInfo = (props)=>{
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
        <div className="profile-master">
            <div className="profile-show">
                <div id="box-prof">
                    <div className="carousel">
                        <div className="card-pic">
                            <div className="user-info">
                                <div className="btns">
                                    <div className="btn-left"><i class="fa fa-close"></i></div>
                                    <div className="btn-right"><i class="fa">&#xf10c;</i></div>
                                </div>
                                <h3>Brendan, 25</h3>
                                <p><span>New York, NY</span></p>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <a type="button" onClick={()=>{}}><i className="fa fa-user"></i></a>
                        <a type="button"><i class="fa fa-heart"></i></a>
                        <a type="button"><i className='far fa-comment-dots'></i></a>
                        <a type="button"><i class='fas fa-clone'></i></a>
                        <a type="button"><i onClick={props.handleLogout} class="fa fa-sign-out"></i></a>
                    </nav>
                </div>
            {/* <div className="prof-box">
                    <div id="close-prof">
                        <p><i className="fa fa-times-circle"></i></p>
                    </div>
                    <div>
                        <img className="profile-pic" src={props.user.image ? props.user.image : 'https://us.123rf.com/450wm/caiquame/caiquame2101/caiquame210100429/163283955-blank-man-profile-head-icon-placeholder.jpg?ver=6'}/>
                    </div>
                    <div>
                        <h3 className="prof-name">{props.user.name == '' ? 'Your name' : props.user.name}</h3>
                    </div>
                    <div>
                        <h4 className="prof-username">{props.user.username}</h4>
                    </div>
                    <div>
                        <h5 className="prof-fav_console">{props.user.fav_console == "" ? 'Your console' : props.user.fav_console}</h5>
                    </div>
                    <div>
                        <p className="prof-age">{props.user.age == "" ? 'Your age' : props.user.age}</p>
                    </div>
                    <div>
                    <button className="adit-prof-btn">EDIT PROFILE</button>
                    <br/>
                    <br/>
                    <button className="logout-btn" onClick={props.handleLogout}>LOG OUT</button>
                    </div>
                </div> */}
            </div>
            </div>
        </>
    )
}
export default UserInfo