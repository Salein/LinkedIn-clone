import { useState } from 'react'
import { LoginAPI } from '../api/AuthAPI'
import LinkedinLogo from '../assets/linkedinLogo.png'
import '../Sass/LoginComponent.scss'

const LoginComponent = () => {
  const [credentails, setCredentails] = useState({})
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password)
      console.log(res)
    }
    catch (e) {
      return e
    }
  }
  return (
    <div className='login-wrapper'>
      <h1>Sign in</h1>
      <div className='auth-inputs'>
        <input onChange={(event) =>
          setCredentails({ ...credentails, email: event.target.value })}
          className='common-input' placeholder='Enter your email' />
        <input onChange={(event) =>
          setCredentails({ ...credentails, password: event.target.value })}
          className='common-input' placeholder='Enter your password' />
      </div>
      <button onClick={login} className="login-btn">Sign in</button>
    </div>
  );
};

export default LoginComponent