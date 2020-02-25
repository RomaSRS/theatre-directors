import React from 'react';
import './DirectorMainInfo.css';
import Zoom from 'react-reveal/Zoom';

function DirectorMainInfo(props) {
    const { data } = props;
    const { born, deceased, shortBiography, name, image } = data;
    return (
        <div className="director-main-info">
            <div className="director-main-info-description">
                <p className="director-life-date">{`${born} - ${deceased}`}</p>
                <p className="director-short-biography">{shortBiography}</p>
            </div>
            <Zoom>
            <div className="director-image-container">
                <img src={image} className="director-main-info-image" alt="director"/>
                <p className="director-main-info-name">{name}</p>
            </div>
            </Zoom>
        </div>
    );
}

export default DirectorMainInfo;
