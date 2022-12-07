import React from 'react';

const Navigation = ({ onRouteChange }) =>
{
    return(
        <nav className="tr f3 dim black pointer underline pa3">
            <p onClick={() => onRouteChange('signin')}>Sign Out</p>
        </nav>
    );
}

export default Navigation;