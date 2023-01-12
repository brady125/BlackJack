import React from 'react';
import { Container } from 'react-bootstrap';
import Card from './card';
import { Row, Col } from 'react-bootstrap';
import {Component} from 'react';
import './deck.css';

// create a deck class for cards
class deck extends Component{
    // create a constructor for the deck class
    constructor(){
        super();
        this.state = {
            data: [],
        }
   
    }

    componentDidMount(){
        this.fetchData();
    }

    getData(){
        this.fetchData();
        const data = this.state.data;
        return data;
    }



    fetchData(){
        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(data => {
            this.setState({data: data});
        });
    }


    getDeck(){
        var deck = [];
        var cardList = this.state.data;
        var i = 0;
        for(let card in cardList){
            if (cardList[card][2] === "Hearts"){
                deck.push(<Card className="aCard" />);
            }
            else if (cardList[card][2] === "Diamonds"){
                deck.push(<Card className="aCard"  />);
            }
            else if (cardList[card][2] === "Spades"){
                if(cardList[card][3] === 11){
                    deck.push(<Card className="AceOfSpades"  />);
                }

                else {
                    deck.push(<Card className="aCard"  />);
                }
            }
            else{
                deck.push(<Card className="aCard"  />);
            }
            i++;
            
        }   
        return deck;
        }   

        // get Card
        getCard(Name){
            var card = [];
            for(let i = 0; i < this.state.data.length; i++){
                if(this.state.data[i][1] === Name){
                    card.push(<Card className="aCard" key={i} name={this.state.data[i][1]} suit={this.state.data[i][2]} value={this.state.data[i][3]} />);
                }
            }
            return card;
        }

        

    render(){
        const deck = this.getDeck();
        const card = this.getCard("Ace of Spades");
        const cardGrid = [];
        cardGrid.push(
            <Row >
                <Col className="AoS" key={0}>{deck[0]}</Col>
                <Col className="TwoOS" key={1}>{deck[1]}</Col>
                <Col className="ThreeOS" key={2}>{deck[2]}</Col>
                <Col className="FourOS" key={3}>{deck[3]}</Col>
                <Col className="FiveOS" key={4}>{deck[4]}</Col>
                <Col className="SixOS" key={5}>{deck[5]}</Col>
                <Col className="SevenOS" key={6}>{deck[6]}</Col>
                <Col className="EightOS" key={7}>{deck[7]}</Col>
                <Col className="NineOS" key={8}>{deck[8]}</Col>
                <Col className="TenOS" key={9}>{deck[9]}</Col>
                <Col className="JackOS" key={10}>{deck[10]}</Col>
                <Col className="QueenOS" key={11}>{deck[11]}</Col>
                <Col className="KingOS" key={12}>{deck[12]}</Col>
                <Col className="AoH" key={13}>{deck[13]}</Col>
                <Col className="TwoOH" key={14}>{deck[14]}</Col>
                <Col className="ThreeOH" key={15}>{deck[15]}</Col>
                <Col className="FourOH" key={16}>{deck[16]}</Col>
                <Col className="FiveOH" key={17}>{deck[17]}</Col>
                <Col className="SixOH" key={18}>{deck[18]}</Col>
                <Col className="SevenOH" key={19}>{deck[19]}</Col>
                <Col className="EightOH" key={20}>{deck[20]}</Col>
                <Col className="NineOH" key={21}>{deck[21]}</Col>
                <Col className="TenOH" key={22}>{deck[22]}</Col>
                <Col className="JackOH" key={23}>{deck[23]}</Col>
                <Col className="QueenOH" key={24}>{deck[24]}</Col>
                <Col className="KingOH" key={25}>{deck[25]}</Col>
            </Row>
        );
        cardGrid.push(
            <Row >
                <Col className="AoC" key={26}>{deck[26]}</Col>
                <Col className="TwoOC" key={27}>{deck[27]}</Col>
                <Col className="ThreeOC" key={28}>{deck[28]}</Col>
                <Col className="FourOC" key={29}>{deck[29]}</Col>
                <Col className="FiveOC" key={30}>{deck[30]}</Col>
                <Col className="SixOC" key={31}>{deck[31]}</Col>
                <Col className="SevenOC" key={32}>{deck[32]}</Col>
                <Col className="EightOC" key={33}>{deck[33]}</Col>
                <Col className="NineOC" key={34}>{deck[34]}</Col>
                <Col className="TenOC" key={35}>{deck[35]}</Col>
                <Col className="JackOC" key={36}>{deck[36]}</Col>
                <Col className="QueenOC" key={37}>{deck[37]}</Col>
                <Col className="KingOC" key={38}>{deck[38]}</Col>
                <Col className="AoD" key={39}>{deck[39]}</Col>
                <Col className="TwoOD" key={40}>{deck[40]}</Col>
                <Col className="ThreeOD" key={41}>{deck[41]}</Col>
                <Col className="FourOD" key={42}>{deck[42]}</Col>
                <Col className="FiveOD" key={43}>{deck[43]}</Col>
                <Col className="SixOD" key={44}>{deck[44]}</Col>
                <Col className="SevenOD" key={45}>{deck[45]}</Col>
                <Col className="EightOD" key={46}>{deck[46]}</Col>
                <Col className="NineOD" key={47}>{deck[47]}</Col>
                <Col className="TenOD" key={48}>{deck[48]}</Col>
                <Col className="JackOD" key={49}>{deck[49]}</Col>
                <Col className="QueenOD" key={50}>{deck[50]}</Col>
                <Col className="KingOD" key={51}>{deck[51]}</Col>

            </Row>
        );
        
     
        return(
            this.state.data.length === 0 ? <div>Loading...</div> :
            <>
            <div className="deck">
                <Container>
                    {cardGrid}
                </Container>
            </div>
            </>
        )
    }


}

export default deck;