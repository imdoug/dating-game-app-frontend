import React, {useState} from 'react'

const UserInfo = (props)=>{
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
            </div>
            </div>
        </>
    )
}
export default UserInfo