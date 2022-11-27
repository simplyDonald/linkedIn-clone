import { Avatar } from '@mui/material';
import React from 'react'
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className='sidebar__avatar' />
        <h2>Donald Abuah</h2>
        <h4>donspaceyou@yahoo.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">800</p>
        </div>

        <div className="sidebar__button">
          <p>Recent</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar