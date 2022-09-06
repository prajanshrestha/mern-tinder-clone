import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
// import IconButton from '@material-ui/icons/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <div className='header'> 
      <PersonIcon fontSize='large' className='header_icon' />  
      <img src='https://tinder.com/static/tinder.png' alt='tinder-logo' className='header_logo' />
      <ForumIcon fontSize='large' className='header_icon' />
    </div>
  )
}

export default Header