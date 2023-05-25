import { useState } from 'react'
import { LoginAPI } from '../api/AuthAPI'
import '../Sass/LoginComponent.scss'

const LoginComponent = () => {
    const [credentails, setCredentails] = useState({})
    const login = () => {
      let res = LoginAPI(credentails.email, credentails.password)
      console.log(res)
    }
    return (
        <div className='login-wrapper'>
            <h1>Login</h1>
            <div className='auth-inputs'>
                <input onChange={(event) =>
                setCredentails({...credentails, email: event.target.value})}
                className='common-input' placeholder='Enter your email' />
                <input onChange={(event) =>
                setCredentails({...credentails, password: event.target.password})}
                className='common-input' placeholder='Enter your password' />
            </div>
            <button onClick={login} className="login-btn">Log in to LinkedIn</button>
        </div>
    );
};

export default LoginComponent;