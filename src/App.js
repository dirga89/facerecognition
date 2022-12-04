import React, { Component } from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import Rank from './Component/Rank/Rank';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';

const App = () =>
{
    return(
        <div className="App">
            <ParticlesBg type="cobweb" bg={true} />
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm />
        </div>
    );
}

export default App;