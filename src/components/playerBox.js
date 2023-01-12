import React from 'react';
import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import "./playerBox.css"


class playerBox extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            wins: 0,
            bankroll: 0,
        }
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(){
        fetch('http://localhost:5000/login/recentUser')

        .then(res => res.json())
        .then(data => {
            this.setState({
                name: data[0].username,
                wins: data[0].wins,
                bankroll: data[0].balance,
                
            });
        });

    }

    componentDidMount(){
        this.fetchData();
    }


    render(){

        return(
            <>
                    <div className="playerBox">
                       <div className='info'>
                            <div>Welcome User: {this.state.name}</div>
                            <div>Bankroll: ${this.state.bankroll}</div>
                            <div>Wins: {this.state.wins}</div>
                        </div>
                </div>
            </>
        );
    }
}

export default playerBox;