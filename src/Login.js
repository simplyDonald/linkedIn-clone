import './Login.css'
import { auth } from './firebase'
import { useState } from 'react';
function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');


  const register = () => {

  }

  const loginToApp = (e) => {
    e.preventDefault();
    // auth
  }

  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt="" />
      <form>
        <input type="text" value={name} onChange={(e)=>{
          setName(e.target.value)
        }} placeholder="Full name (required if registering)" />

        <input type="text" value={profilePic} onChange={(e)=>{
          setProfilePic(e.target.value)
        }} placeholder="Profile pic URL (optional)" />

        <input type="email" value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}  placeholder="Email" />

        <input type="password" value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }}placeholder="Password" />
        
        <button type="submit" onClick={loginToApp}>Sign In</button>

      </form>

      <p>Not a member? <span className="login__register" onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login;