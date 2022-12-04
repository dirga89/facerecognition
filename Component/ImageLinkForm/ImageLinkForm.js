import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) =>
{
    return(
        <div className="tc f3 b">
            <p>Put a link ref to an image bellow:</p>
            <div className="form center pa4 br3 shadow-5 o-80">
                <input className="center f4 pa2 w-70" type="text" onChange={onInputChange} />
                <button className=" w-30 grow f4 link ph3 pv2 dib black bg-light-gray" onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;
