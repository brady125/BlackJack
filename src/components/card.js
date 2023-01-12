import React from 'react';
import "./card.css"

// create a card class that will be used to create a card object
class Card extends React.Component{

    // create a constructor for the card class
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            suit: this.props.suit,
            value: this.props.value,
            image: this.props.image,
        }
    }

    render(){
        return(
            <>
                <div className="card"></div>
            </>
        );  
    }
}

export default Card;
