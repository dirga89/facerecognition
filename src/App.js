import React, { Component } from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';
import Navigation from './Component/Navigation/Navigation';
import SignIn from  './Component/SignIn/SignIn';
import Register from './Component/Register/Register';
import Logo from './Component/Logo/Logo';
import Rank from './Component/Rank/Rank';
import ImageLinkForm from './Component/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Component/FaceRecognition/FaceRecognition';
// import Footer from './Component/Footer/Footer';

const initialState = {
    input: '',
    imageUrl: '',
    box: [{}],
    route: 'signin',
    isSignedIn: false,
    user: {
        id: '',
        name: '',
        email: '',
        password: '',
        entries: 0,
        joined: new Date()
    }
}
class App extends Component
{
    constructor()
    {
        super();
        this.state = initialState;
    }

    componentDidMount() 
    {
        document.title = "Face Recognition";
        // fetch('http://localhost:4000')
        //     .then(response => response.json())
        //     .then(console.log);
    }

    loadUser = (data) => {
        this.setState({user: {
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
            entries: data.entries,
            joined: data.joined
        }})
    }

    calculateFaceLocation = (data) =>
    {
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);

        //const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const clarifaiFace = data.outputs[0].data.regions;
        return clarifaiFace.map(region => {
            return{
                leftCol: region.region_info.bounding_box.left_col * width,
                topRow: region.region_info.bounding_box.top_row * height,
                rightCol: width - (region.region_info.bounding_box.right_col * width),
                bottomRow: height - (region.region_info.bounding_box.bottom_row * height)
            };
        })
    }

    displayFaceBox = (box) =>
    {
        this.setState({box: box});
    }

    onInputChange = (event) =>
    {
        this.setState({input: event.target.value});
    }

    onPictureSubmit = () =>
    {
        this.setState({imageUrl: this.state.input});

        fetch('https://sleepy-eyrie-76276.herokuapp.com/imageapi', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                input: this.state.input
            })
        })
        .then((response) => response.json())
        .then((result) =>
        {
            if(result){
                fetch('https://sleepy-eyrie-76276.herokuapp.com/image', {
                    method: 'put',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        id: this.state.user.id
                    })
                })
                .then(res => res.json())
                .then(count => {
                    this.setState(Object.assign(this.state.user, {entries: count}));
                })
            }
            this.displayFaceBox(this.calculateFaceLocation(result));
        }
        )
        .catch((error) => console.log("error", error));
    }

    onRouteChange = (route) =>
    {
        if(route === 'home')
        {
            this.setState({isSignedIn: true});
        }
        else
        {
            this.setState(initialState);
        }

        this.setState({route: route});
    }

    render()
    {
        return(
            <div className="App">
                <ParticlesBg className="particles" type="cobweb" bg={true} color="#888888" />
                <Navigation 
                    onRouteChange={this.onRouteChange} 
                    isSignedIn={this.state.isSignedIn}
                />
                {   
                    this.state.route === 'home'
                    ?
                        <>
                            <Logo />
                            <Rank 
                                name={this.state.user.name}
                                entries={this.state.user.entries}
                            />
                            <ImageLinkForm 
                                onInputChange={this.onInputChange} 
                                onButtonSubmit={this.onPictureSubmit} 
                            />
                            <FaceRecognition 
                                imageUrl={this.state.imageUrl} 
                                box={this.state.box}
                            />
                        </>
                    :
                    (
                        this.state.route === 'register'
                        ?
                        <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                        :
                        <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                    )
                }
                {/* <Footer /> */}
            </div>
        );
    }
}

export default App;