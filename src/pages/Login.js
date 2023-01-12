import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            validLogin: false,
            name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.name !== "") {
            fetch('http://localhost:5000/login/' + this.state.name, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.name
            })
            })
                .then(res => res.json())
                
                .then(data => {
                    this.setState({ validLogin: data });
                    if (data) {
                        setTimeout(() => {
                            window.location.href = "http://localhost:3000/Home";
                        }, 500);
                    }
                    else{
                        alert("Invalid Login");
                    }
                })
            }
        else{
            fetch("http://localhost:5000/login/sampleUser", { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
        
            setTimeout(() => {
                window.location.href = "http://localhost:3000/Home";
            }, 500);
        }
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <div className="Login">
                <div className="container">
                    <div className="header">
                        <div className="Lucky">Feeling Lucky?</div>
                        <div className="Play">Let's Play BlackJack!</div>
                        <div className="Bonus">Every time you sign in you get $5!</div>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <div className="theInput">
                            <div className="form-group">
                                <div><br></br></div>
                                <input type="text" className="form-control" id="username" placeholder="Enter Username or Email" onChange={this.handleNameChange} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" id='submitMe'>Submit</button>
                        <div><br></br></div>
                        <button type="submit" className='btn btn-seconday' style={{color : 'red'}}>If you want to play and not sign hit click here</button>
                        <div><br></br></div>
                        <button type="submit" id="Register">Click me to create your BlackJack Account!</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;