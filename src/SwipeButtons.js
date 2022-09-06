import React from 'react';
import "./SwipeButtons.css";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <ReplayIcon fontSize='large' className='swipeButtons_repeat' />
        <CloseIcon fontSize='large' className='swipeButtons_left' />
        <StarRateIcon fontSize='large' className='swipeButtons_star' />
        <FavoriteIcon fontSize='large' className='swipeButtons_right' />
        <FlashOnIcon fontSize='large' className='swipeButtons_lightning' />
    </div>
  )
}

export default SwipeButtons