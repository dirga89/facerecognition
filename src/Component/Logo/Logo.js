import { logDOM } from '@testing-library/react';
import React from 'react';
import Tilt from 'react-parallax-tilt';

const Logo = () =>
{
    const [scale, setScale] = React.useState(1.15);
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