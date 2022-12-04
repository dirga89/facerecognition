import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () =>
{
    return(
        <div className="tc f3">
            <p>Image</p>
            <div className="form center pa4 br3 shadow-5">
                <input className="center f4 pa2 w-70" type="text"/>
                <button className=" w-30 grow f4 link ph3 pv2 dib black bg-light-gray">Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;