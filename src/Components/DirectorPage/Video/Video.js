import React from 'react';

import './Video.css';

function Video(props) {
  const { data } = props;

  function showPopUp() {
    document.getElementById('director-video').src = `${data.video}`;
    document.getElementById('popup-window').style.display = 'block';
  }
    return (
      <button type='button' className='video' onClick={showPopUp}>
        Youtube
      </button>
    );
}

export default Video;
