import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) =>
{
    // isSignedIn
    // ?
    //     <nav className="tr f3 dim black pointer underline pa3">
    //         <p onClick={() => onRouteChange('signin')}>Sign Out</p>
    //     </nav>
    // :
    //     <nav className="tr f3 dim black pointer underline pa3">
    //         <p onClick={() => onRouteChange('signin')}>Sign In</p>
    //         <p onClick={() => onRouteChange('register')}>Register</p>
    //     </nav>
        
    let html = '';

    if(isSignedIn)
    {
        html=
        (
            <nav className="tr f3 dim black pointer underline pa3">
                <p onClick={() => onRouteChange('signin')}>Sign Out</p>
            </nav>
        );
        
    }
    else
    {
        html=
        (
            <nav className="flex justify-end f3 ">
                <p onClick={() => onRouteChange('signin')} className="dim black pointer underline pa3">Sign In</p>
                <p onClick={() => onRouteChange('register')} className="dim black pointer underline pa3">Register</p>
            </nav>
               
        );
    }
    return html;
}

export default Navigation;