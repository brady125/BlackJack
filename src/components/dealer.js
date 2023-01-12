import React from 'react'
import {Component} from 'react';

class player extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            hand: this.props.hand, 
            score: 0,
        }
        this.getScore = this.getScore.bind(this);
    }

    getScore(){
        this.setState({score: this.state.hand.getScore()});
    }

    hit(Card){
        this.state.hand.addCard(Card);
        this.getScore();
    }

    

    render(){
        return(
            <>
                <div>
                    <h1>Hello {this.state.name}</h1>
                    <h1>Hand: {this.state.hand}</h1>
                </div>
            </>
        );
    }

}

export default player;
