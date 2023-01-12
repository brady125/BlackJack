import React from 'react'
import { Container } from 'react-bootstrap';
import Deck from '../components/deck'
import PlayerBox from '../components/playerBox'
import {Link} from 'react-router-dom'

import "./Home.css"



class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            deck: new Deck(),
    } 
    }
    

    changePage = () => {
        window.location.href = "http://localhost:3000/Game";
    }
    
    render() {
        const deck = this.state.deck;
        console.log(deck);
        return (
            <div className="BlackJack">
                <Container>
                <div className="Deck">
                    <Deck/>
                </div>
                <div className="Player">
                    <PlayerBox/>
                    </div>
                    <div className="StartGame">
                        <div className='start'>Hit the Red Button to Play a Game</div>
                        <div className="button" onClick={this.changePage}></div>
                    </div>
                <div className='Inspiration'>
                        <p>"The Gambler is thinking about how much he won.</p>
                        <p>The Card Counter was busy updating the running count, converting to the true count, and preparing his next bets."</p>
                        <p> - Edward Thorp</p>
                    </div>
                </Container>

            </div>
        );
    }
}

export default Home;