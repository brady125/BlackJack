import React from 'react';
import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

// create a hand class for cards
class hand extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            cards: this.props.cards, 
            score: 0
        }
        this.getScore = this.getScore.bind(this);
    }

    getScore(){
        var score = 0;
        for(let card in this.state.cards){
            score += this.state.cards[card].value;
        }
        this.setState({score: score});
        
    }

    addCard(Card){
        this.state.cards.push(Card);
        this.getScore();
    }

    render(){
        const hand = this.state.cards;
        // create a container for the cards

        const handRows = [];
        for(let i = 0; i < hand.length; i+=1){
            <Col>
                {hand[i]}
            </Col>
        }

        return(
            <>
                <Container>
                    {handRows}
                    <h1>Score: {this.state.score}</h1>
                </Container>
            </>
        );
    }
}

export default hand;


