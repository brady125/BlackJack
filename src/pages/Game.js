import React from 'react'
import deck from '../components/deck';
import Deck from '../components/deck';
import Card from '../components/card';
import Player from '../components/player'
import './Game.css'

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            deck : [],
            dataReceived: false,
            isPlaying: true


        }
        
    }

    getPlayer() {
        if(this.state.dataReceived === false) {
            fetch('http://localhost:5000/login/recentUser')

                .then(res => res.json())
                .then(data => {
                    this.setState({ dataReceived: true });
                    return data;
                });
                
            }
    }

    fetchData() {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => {
                this.setState({ deck: data });
            });
    }

        

    componentDidMount() {

        this.fetchData();
        this.getPlayer();
    }

    render() {
        const deck = this.state.deck;
        // *cracks knuckles* time to shuffle the deck
        while(this.state.isPlaying === true){
            // create blackjack game
            // create player
            var player = new Player(this.getPlayer(), 100, 0);
            // create dealer
            var dealer = new Player("Dealer", 100, 0);
            // create deck
            // deal 2 cards to player
            player.hit(deck.dealCard());
            player.hit(deck.dealCard());
            // deal 2 cards to dealer
            dealer.hit(deck.dealCard());
            dealer.hit(deck.dealCard());
            // check for blackjack
            if(player.getScore() === 21){
                player.bankroll += 1.5*player.wager;
                player.wins++;
                console.log("Player wins with blackjack!");
                console.log("Player bankroll: " + player.bankroll);
            }
            else if(dealer.getScore() === 21){
                dealer.bankroll += 1.5*dealer.wager;
                dealer.wins++;
                console.log("Dealer wins with blackjack!");
                console.log("Dealer bankroll: " + dealer.bankroll);
            }
            else{
                // player turn
                while(player.getScore() < 21 && player.playingRound){
                    console.log("Player turn");
                    console.log("Player hand: " + player.hand);
                    console.log("Player score: " + player.getScore());
                    console.log("Dealer hand: " + dealer.hand);
                    console.log("Dealer score: " + dealer.getScore());
                    console.log("Player bankroll: " + player.bankroll);
                    console.log("Dealer bankroll: " + dealer.bankroll);
                    console.log("Player wins: " + player.wins);
                    console.log("Dealer wins: " + dealer.wins);
                    console.log("Hit or Stand? (h/s)");
                    // var input = prompt();
                    // if(input === "h"){
                    //     player.hit(deck.dealCard());
                    // }
                    // else if(input === "s"){
                    //     player.stand();
                    // }
                    // else{
                    //     console.log("Invalid input");
                    // }
                }
                if(player.getScore() > 21){
                    player.bankroll -= player.wager;
                    dealer.bankroll += player.wager;
                    dealer.wins++;
                    console.log("Player busts!");
                    console.log("Player bankroll: " + player.bankroll);
                    console.log("Dealer bankroll: " + dealer.bankroll);
                }
                else{
                    // dealer turn
                    while(dealer.getScore() < 17){
                        console.log("Dealer turn");
                        console.log("Player hand: " + player.hand);
                        console.log("Player score: " + player.getScore());
                        console.log("Dealer hand: " + dealer.hand);
                        console.log("Dealer score: " + dealer.getScore());
                        console.log("Player bankroll: " + player.bankroll);
                        console.log("Dealer bankroll: " + dealer.bankroll);
                        console.log("Player wins: " + player.wins);
                        console.log("Dealer wins: " + dealer.wins);
                        dealer.hit(deck.dealCard());
                    }
                    if(dealer.getScore() > 21){
                        dealer.bankroll -= dealer.wager;
                        player.bankroll += dealer.wager;
                        player.wins++;
                        console.log("Dealer busts!");
                        console.log("Player bankroll: " + player.bankroll);
                        console.log("Dealer bankroll: " + dealer.bankroll);
                    }
                    else{
                        if(player.getScore() > dealer.getScore()){
                            player.bankroll += player.wager;
                            dealer.bankroll -= player.wager;
                            player.wins++;
                            console.log("Player wins!");
                            console.log("Player bankroll: " + player.bankroll);
                            console.log("Dealer bankroll: " + dealer.bankroll);
                        }
                        else if(player.getScore() < dealer.getScore()){
                            player.bankroll -= dealer.wager;
                            dealer.bankroll += dealer.wager;
                            dealer.wins++;
                            console.log("Dealer wins!");
                            console.log("Player bankroll: " + player.bankroll);
                            console.log("Dealer bankroll: " + dealer.bankroll);
                        }
                        else{
                            console.log("Push!");
                            console.log("Player bankroll: " + player.bankroll);
                            console.log("Dealer bankroll: " + dealer.bankroll);
                        }
                    }
                }
            }
            // check if player or dealer is out of money
            if(player.bankroll <= 0){
                console.log("Player is out of money!");
                this.state.isPlaying = false;
            }
            else if(dealer.bankroll <= 0){
                console.log("Dealer is out of money!");
                this.state.isPlaying = false;
            }
            else{
                console.log("Play again? (y/n)");

                // var input = prompt();
                // if(input === "y"){
                //     this.state.isPlaying = true;
                // }
                // else if(input === "n"){
                //     this.state.isPlaying = false;
                // }
                // else{
                //     console.log("Invalid input");
                // }
            }
        }
      
        
        




        return (
            <div id="Game">
                <div className="Deck">
                    
                </div>
            </div>
        );
    }

}

export default Game;