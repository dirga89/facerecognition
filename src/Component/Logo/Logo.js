import React from 'react';
import Tilt from 'react-parallax-tilt';

const Logo = () =>
{
    return(
    <div className="pa3">
        {/* <Tilt> */}
            <div className="h4 w4 br-100 ba grow-large bw1 bg-gray tc pa3">
                <img src='./logo.png' alt='logo' width='90' height='90' />
            </div>
        {/* </Tilt> */}
    </div>
    );
}

export default Logo; 