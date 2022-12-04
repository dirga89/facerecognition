import React, { Component } from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import Rank from './Component/Rank/Rank';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';

class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            'input': '',
        }
    }

    onInputChange = (event) =>
    {
        console.log(event.target.value);
    }

    onSubmit = () =>
    {
        console.log('click');
    }

    render()
    {
        return(
            <div className="App">
                <ParticlesBg type="cobweb" bg={true} color="#888888" />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm 
                    onInputChange={this.onInputChange} 
                    onButtonSubmit={this.onSubmit} 
                />
            </div>
        );
    }
}

export default App;