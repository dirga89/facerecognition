import React from 'react';

class SignIn extends React.Component
{
    constructor()
    {
        super();
        this.state = 
        {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) =>
    {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) =>
    {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignIn = (event) =>
    {
        //event.preventDefault();
        fetch('https://sleepy-eyrie-76276.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .then(user => {
            this.props.loadUser(user);
            this.props.onRouteChange('home');
        })
        .catch((error) => {
            console.log('Something went wrong.', error);
        })
    }

    render()
    {
        const { onRouteChange } = this.props;
        return(
            <article className="br4 ba dark-gray b--black-100 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center bg-lightest-blue o-90">
                <main className="pa4 black-80 ">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                                <input onChange={this.onEmailChange} className="br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" for="password">Password</label>
                                <input onChange={this.onPasswordChange} className="b br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                            </div>
                            
                            <div className="">
                            <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                            </div>
                            <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                            </div>
                        </fieldset>
                    </div>
                </main>
            </article>
        );
    }
    
}

export default SignIn;