import './Login.css'
import { auth } from './firebase'
import { useState } from 'react';
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');



  const register = (e) => {
    if(!name) {
      return alert('Please enter a full name')
    }

    e.preventDefault();
    // Login logic using auth fornm firebase
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      // update the returned userauth object with the name and profile pic- noiice the updateProfile method and the specific keys to use.
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      }).then(() => {
        // dispatch the login action to your redux store using a structured payload that you want...in this case the user object
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,

        }));
        alert('User created successfully');
      })
    }).catch(error => console.log(error));
  }

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    
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