import React from 'react';
import Youtube from '../../../Assets/Images/YouTube.png'
import './Video.css';

function Video(props) {
  const { data } = props;

  function showPopUp() {
    document.getElementById('director-video').src = `${data.video}`;
    document.querySelector('body').style.overflow = 'hidden';
    document.getElementById('popup-window').style.display = 'flex';
  }
    return (
      <button type='button' className='video' onClick={showPopUp}>
        <img className='youtube-image' src={Youtube} alt='Youtube'></img>
      </button>
    );
}

export default Video;
