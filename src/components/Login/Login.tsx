import React from 'react'
import './Login.css'
import LoginCard from '../LoginCard/LoginCard'

function Login() {
  return (
    <div id='login-section'>
      <div className='login-title'>Login</div>
      <LoginCard />
    </div>
  )
}

export default Login