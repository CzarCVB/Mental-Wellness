import React from 'react'
import {ReactComponent as Logo} from './img-2.svg'
import {Link } from 'react-router-dom'

import '../userLogin/login.scss'

const Register = () => {
    return (
        <div className="base-container">
            <div className="login-header">
                Register
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
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                        <div className="btn">
                            <button type="button">
                                Register
                            </button>
                        </div>
                    </form>
                </div>  
                <div className="switch-user">
                    <p>Already a User?  <Link to ='/login'>Login</Link></p>
                </div> 
            </div>
        </div>
    )
}

 export default Register
