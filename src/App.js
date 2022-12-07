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

class App extends Component
{
    constructor()
    {
        super();
        this.state = {
            input: '',
            imageUrl: '',
            box: {},
            route: 'signin',
        }
    }

    calculateFaceLocation = (data) =>
    {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        return{
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        };
    }

    displayFaceBox = (box) =>
    {
        
        this.setState({box: box});
    }

    onInputChange = (event) =>
    {
        this.setState({input: event.target.value});
    }

    onSubmit = () =>
    {
        this.setState({imageUrl: this.state.input});


        //help me => user_id can be found in multiple ways, one way is in https://portal.clarifai.com/settings/profile 
        const USER_ID = "soelak";

        
        // Your PAT (Personal Access Token) can be found in the portal under Authentification
        // help me => PAT can be found in https://portal.clarifai.com/settings/authentication (create one if necessary!)
        const PAT = "496cd0e28de54967a811c97f89177c1c"; 
        
        
        // help me => App Id is just the name of your app on the portal. 
        const APP_ID = "my-first-application"; 


        // Change these to whatever model and image input you want to use
        // help me => https://help.clarifai.com/hc/en-us/articles/1500007677141-Where-to-find-your-Model-IDs-and-Model-Version-IDs
        const MODEL_ID = "face-detection";
        const MODEL_VERSION_ID = "45fb9a671625463fa646c3523a3087d5";

        const IMAGE_URL = this.state.input;

        ///////////////////////////////////////////////////////////////////////////////////
        // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
        ///////////////////////////////////////////////////////////////////////////////////
        const raw = JSON.stringify({
            user_app_id: {
            user_id: USER_ID,
            app_id: APP_ID,
            },
            inputs: [
            {
                data: {
                image: {
                    url: IMAGE_URL,
                },
                },
            },
            ],
        });

        const requestOptions = {
            method: "POST",
            headers: {
            Accept: "application/json",
            Authorization: "Key " + PAT,
            },
            body: raw,
        };

        fetch(
            "https://api.clarifai.com/v2/models/" +
            MODEL_ID +
            "/versions/" +
            MODEL_VERSION_ID +
            "/outputs",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) =>
            {
                console.log(result);
                this.displayFaceBox(this.calculateFaceLocation(result));
            }
            )
            .catch((error) => console.log("error", error));
    }

    onRouteChange = (route) =>
    {
        this.setState({route: route});
    }

    render()
    {
        return(
            <div className="App">
                <ParticlesBg className="particles" type="cobweb" bg={true} color="#888888" />
                <Navigation onRouteChange={this.onRouteChange} />
                {   
                    this.state.route === 'home'
                    ?
                        <>
                            <Logo />
                            <Rank />
                            <ImageLinkForm 
                                onInputChange={this.onInputChange} 
                                onButtonSubmit={this.onSubmit} 
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
                        <Register />
                        :
                        <SignIn onRouteChange={this.onRouteChange} />
                    )
                }
            </div>
        );
    }
}

export default App;