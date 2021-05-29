import React ,{useState} from 'react'
import {ReactComponent as Logo} from './img-2.svg'
import {Link } from 'react-router-dom'

import '../userLogin/login.scss'

const Register = ({history}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event, username, email, password) => {
        event.preventDefault();
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username:username,
                email:email,
                password: password
            })
        })
        .then(response=>response.text())
        .then(data=>{
            console.log(data);
            history.push("/login");
        })
    };

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
                    <form onSubmit={(event) => onSubmit(event, username, email, password)}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                        </div>
                        <div className="btn">
                            <button type="submit">
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
