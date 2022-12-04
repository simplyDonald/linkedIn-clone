import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
  import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
  import ChatIcon from '@mui/icons-material/Chat';
  import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';


function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    // dispatch the logout action to your redux store
    dispatch(logout());
    // logout function call for firebase auth
    auth.signOut();
  };

  return (
    <div className="header">
      
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />

        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={"https://randomwordgenerator.com/img/picture-generator/51e4d7444c54b10ff3d8992cc12c30771037dbf85254794e73277bd69e4f_640.jpg"} title="Me" onClick={logoutOfApp} />

      </div>

    </div>
    
  )
}

export default Header