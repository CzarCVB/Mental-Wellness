import React from 'react'
import {ReactComponent as Logo} from './img-1.svg'
import './login.scss'
import {Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="base-container">
            <div className="login-header">
                Login
            </div>
            <div className="login-content">
                <div className="login-image">
                     <Logo />
                </div>
                <div className="login-form">
                    <form >
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                        <div className="btn">
                            <button type="button">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className="switch-user">
                    <p>New User?  <Link to ='/register'>Register</Link></p>
                </div>  
            </div>
        </div>
    )
}

 export default Login
  