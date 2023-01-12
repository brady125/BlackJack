import React from 'react';
import "./Login.css"


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            username: "",
            password: "",
            email: "",
            bankroll: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault(); 
        this.createUser();
        setTimeout(() => {
                window.location.href = "http://localhost:3000/Home";
            }, 1000);
        
    }

    handleNameChange = (event) => {
        this.setState({username: event.target.value});
    }

    handleBankrollChange = (event) => {
        this.setState({bankroll: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    handleEmailChange = (event) => {
        this.setState({email: event .target.value});
    }


    createUser(){
        fetch('http://localhost:5000/createUser' , {    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                balance: this.state.bankroll
            })
        })
        .then(res => res.json())
        .then(data => {
            this.setState({data: data});
        });

    }


    

    render() {
        return (
            <div className="Login">
                <div className="container">
                        <div className="header">
                            <div className="Lucky">Feeling Lucky?</div>
                            <div className="Play">Let's Play BlackJack!</div>
                            <div className="Register">Register Here</div>
                    </div>
                    
                        <form onSubmit={this.handleSubmit}>
                        <div className="theInput">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter Username" onChange={this.handleNameChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter Password" onChange={this.handlePasswordChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter Email" onChange={this.handleEmailChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="bankroll">Bankroll</label>
                                <input type="number" className="form-control" id="bankroll" placeholder="Enter Bankroll" onChange={this.handleBankrollChange}/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" id='submitMe'>Submit</button>
                        


                    </form>
                </div>
            </div>
        );
    }
}

export default Register;