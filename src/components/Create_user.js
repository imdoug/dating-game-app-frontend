import React, {useState} from 'react'

const Create = (props) =>{
    let  emptyUser = {username: '', password: ''}
    const [user, setUser] = useState(emptyUser)
    const handleChange  = (event) =>{
        setUser({...user, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(user)
        props.handleCreate(user)
    }
    return (
        <>
        <h3 className="h3 sign-up">SIGN UP</h3>
            <form  onSubmit={handleSubmit}>
                    <div className="login-form">
                        <div className="row">
                            <div className="icon">
                                <i className="fa fa-user-circle-o"></i>
                            </div>
                            <input className="input-field" type="text" name="username" placeholder="username" onChange={handleChange}/>
                        </div>
                    </div>
                <br />
                <div className="row">
                    <div className="icon1">
                        <i className="fa fa-key"></i>
                    </div>
                    <input type="password" name="password" placeholder="password" onChange={handleChange}/>
                </div>
                <br />
                <div className="btn-row">
                    <input className="login-btn" type="submit" value="ENTER"/>
                </div>
            </form>

        </>
    )
}

export default Create