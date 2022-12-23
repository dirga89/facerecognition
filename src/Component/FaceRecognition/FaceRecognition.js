import React from 'react';
import './FaceRecognition.css';



const FaceRecognition = ({ imageUrl, box }) =>
{
    let boundings = [];
    let length = box[0].topRow ? box.length : 0;

    // if(box[0].topRow)
    // {
    //     length = box.length;
    // }

    for(let i=0; i<length; i++)
    {
        boundings.push(<div className="bounding-box" style={{ top: box[i].topRow, right: box[i].rightCol, bottom: box[i].bottomRow, left: box[i].leftCol }}></div>);
    }

    return(
        <div className="center ma">
            <div className=''>
                <h2>face detected: {length}</h2>
            </div>
            <div className='absolute mt5'>
                <img id='inputImage'  width='680px' height='auto' src={imageUrl} alt='face' />
                { boundings }
            </div>
        </div>
    );
}

export default FaceRecognition;
