import { Avatar } from '@mui/material';
import React from 'react'
import './Sidebar.css';

function Sidebar() {

  const recentItem = (topic) => (
  <div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
    <p>{topic}</p>
  </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src="https://images.unsplash.com/photo-1669287731461-bd8ce3126710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
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

      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}

      </div>
    </div>
  )
}

export default Sidebar