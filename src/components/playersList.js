import React from 'react';
import {Component} from 'react';
import Player from './player';

class playersList extends Component{
    constructor(props){
        super(props);
        this.state = {
            players: this.props.players,
        }
    }

    render(){
        const playerRows = []; 
        for (let i = 0; i < this.state.players.length; i++){
        }

}
}