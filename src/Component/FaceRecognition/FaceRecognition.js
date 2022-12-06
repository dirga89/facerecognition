import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) =>
{
    return(
        <div className="tc">
            <img id='inputImage' className="pa3" width='500px' src={imageUrl} alt='face' />
            <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
    );
}

export default FaceRecognition;
