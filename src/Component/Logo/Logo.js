import React from 'react';
import Tilt from 'react-parallax-tilt';

const Logo = () =>
{
    return(
    <div className="pa3">
        <Tilt>
            <div className="h4 w4 br-100 ba bw1 bg-gray tc pa3">
                <h1>Dirga</h1>
            </div>
        </Tilt>
    </div>
    );
}

export default Logo; 