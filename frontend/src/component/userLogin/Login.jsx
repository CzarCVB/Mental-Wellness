import React ,{useState, useEffect} from 'react'
import Cookies from 'universal-cookie';
import {ReactComponent as Logo} from './img-new.svg'
import './login.scss'
import {Link } from 'react-router-dom'

const Login = ({history}) => {
    const [username,setUsername]= useState('')
    const [password, setPassword] = useState('')

    const tryLogin = (event, username, password) => {
        event.preventDefault();
        fetch("https://mental-wellness.herokuapp.com/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username:username,
                password: password
            })
        })
        //For LocalHost
        // fetch("http://localhost:3000/login", {
        //     method: "POST",
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         username:username,
        //         password: password
        //     })
        // })
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            if (data.passport && data.passport.user) {
                const cookies = new Cookies();
                cookies.set('user', data.passport.user, { path: '/' });
                history.push("/");
                window.location.reload();
            }
        })
        .catch(e => {
            console.log(e);
        })
    };

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
                    <form onSubmit = {(event) => tryLogin(event, username, password)}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
                        </div>
                        <div className="btn">
                            <button >
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
  