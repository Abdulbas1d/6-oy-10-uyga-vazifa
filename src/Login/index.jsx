import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div className='containers'>
      <form className="form">
        <h2>Login</h2>

        <label htmlFor="email">Email:</label>
        <input id='email' name='email' type="email" />

        <label htmlFor="password">Password:</label>
        <input id='password' name='password' type="password" />

        <button className="button">LOGIN</button>
        <button className="buttonTwo">GUEST USER</button>

        <div className="data">
          <h4>Not a member yet?</h4>
          <NavLink className='login' to="/createAccount">Register</NavLink>
        </div>
      </form>
    </div>
  )
}

export default Login
