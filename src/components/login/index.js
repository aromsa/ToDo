import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { handleLogin } from "./../../redux/action";
import { withRouter } from 'react-router-dom'
import './styles.scss'

const Login = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { history } = props

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

  useEffect(() => {
    handleResponse()
  }, [props.user])

  const handleResponse = () => {
    if (localStorage.token){
      history.push('/todo')
    } else { history.push('/')}
  }

  return(
    <div data-test="loginComponent" className="login">
      <form className="form-body" onSubmit={handleLogin}>

        <h1>Welcome to</h1>
        <h1>ToDo-ti-fruity!</h1>
        <br></br>
        <p>Please Login</p>

        <label>
          Email
          <input className="login-input"
          onChange={emailInputHandler}
          value={email}
          name="email"
          placeholder="email address"
          type="text"
          required />
        </label>

        <label>
          Password
          <input className="login-input"
          onChange={passwordInputHandler}
          name="password"
          value={password}
          placeholder="********"
          type="password"
          required />
        </label>

        <button className="login-button">Login</button>
        <br></br>

        <p className="actions">Reset your password</p>
        <p className="actions">Create an account</p>

      </form>
    </div>
  )
}

function msp(state) {
  return { user: state.user.user }
}

const mdp = (dispatch) => {
  return { handleLogin: (userObj) => dispatch(handleLogin(userObj))}
}

export default connect(msp, mdp)(withRouter(Login))