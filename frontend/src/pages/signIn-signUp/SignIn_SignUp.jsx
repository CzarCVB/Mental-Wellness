import React from 'react'
import {Route} from 'react-router-dom'

import Login from '../../component/userLogin/Login'
import Register from '../../component/userRegister/Register'

import './signIn-signUp.scss'

const SignIn_SignUp = () => {
    return (
        <div className="signIn-signUp">
            <div className="container">
                <Route exact path ='/login' component={Login} />
                <Route exact path ='/register' component={Register} />
            </div>
        </div>
    )
}

export default SignIn_SignUp