import React, { useState } from 'react';
import { connect } from 'react-redux'
import { handleLogin } from "./../../redux/action";
import './styles.scss'

const Login = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailInputHandler = (e) => { 
    setEmail(e.target.value)
  }
  const passwordInputHandler = (e) => { 
    setPassword(e.target.value)
  }
  

  const handleLogin = (e) => {
    e.preventDefault()
    let userObj = {email: email, password: password}
    props.handleLogin(userObj)
    setEmail('')
    setPassword('')
  }

  return(
    <div className="login">
      <form className="form-body" onSubmit={handleLogin}>

        <h1>Welcome!</h1>
        <p>Please Login</p>

        <label>
          Email
          <input
          onChange={emailInputHandler}
          value={email}
          name="email"
          placeholder="email address"
          type="text"
          required />
        </label>

        <label>
          Password
          <input
          onChange={passwordInputHandler}
          name="password"
          value={password}
          placeholder="********"
          type="password"
          required />
        </label>

        <button>Login</button>
        <br></br>

        <p className="actions">Reset your password</p>
        <p className="actions">Create an account</p>

      </form>
    </div>
  )
}

const mdp = (dispatch) => {
  return { handleLogin: (userObj) => dispatch(handleLogin(userObj))}
}

export default connect(null, mdp)(Login)