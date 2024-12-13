import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

function CreateAccount() {
  return (
    <div className='containers'>
      <form className="form">
        <h2>Register</h2>

        <label htmlFor="username">Username:</label>
        <input id='username' name='username' type="text" />

        <label htmlFor="email">Email:</label>
        <input id='email' name='email' type="email" />

        <label htmlFor="password">Password:</label>
        <input id='password' name='password' type="password" />

        <button className="button">REGISTER</button>

        <div className="data">
          <h4>Already a member?</h4>
          <NavLink className="login" to="/login">Login</NavLink>
        </div>
      </form>
    </div>
  )
}

export default CreateAccount
