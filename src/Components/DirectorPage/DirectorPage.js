import React from 'react';

import DirectorMainInfo from './DirectorMainInfo/DirectorMainInfo';
import DirectorBiography from './DirectorBiography/DirectorBiography';
import DirectorWorks from './DirectorWorks/DirectorWorks';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Video from './Video/Video';
import Map from './Map/Map';
import './DirectorPage.css';

function DirectorPage(props) {
    const { data } = props;
    return (
        <div className='director-page'>
            <DirectorMainInfo data={data} />
            <DirectorBiography data={data} />
            <DirectorWorks data={data} />
            <PhotoGallery data={data} />
            <Video data={data} />
            <Map data={data} />
        </div>
    );
}

export default DirectorPage;