import React, {useState} from 'react'

const Login = (props) =>{
    let  emptyUser = {...props.user}
    const [user, setUser] = useState(emptyUser)
    const handleChange  = (event) =>{
        setUser({...user, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(user)
        props.handleLogin(event, user)
    }

    return (
        <>
        <h3 className="h3">LOGIN</h3>
        <form  onSubmit={handleSubmit}>

                <div id="log" className="login-form">

                    <div className="row">
                        <div className="icon">
                            <i className="fa fa-user-circle-o"></i>
                        </div>
                        <input className="input-field login" type="text" name="username" placeholder="username" onChange={handleChange}/>
                    </div>
                </div>
            <br />
            <div id="log" className="row">
                <div className="icon">
                    <i className="fa fa-key"></i>
                </div>
                <input className="login"type="password" name="password" placeholder="password" onChange={handleChange}/>
            </div>
            <br />
            <div className="btn-row">
                <input className="login-btn login" type="submit" value="LOGIN"/>
            </div>
        </form>
        </>
    )
}

export default Login