import React, {Component} from 'react';

import Input from './input';

class Card extends Component {
    constructor() {
        super()
        
        this.state = {
            color: '',
            pluralNoun: '',
            adjectiveOne: '',
            celebOne: '',
            adjectiveTwo: '',
            nounOne: '',
            numberOne: '',
            numberTwo: '',
            nounTwo: '',
            adjectiveThree: '',
            celebTwo: '',
            celebThree: '',
            adjectiveFour: '',
            nounThree: '',
            celebFour: '',
            adjectiveFive: ''
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event){
        this.setState({[event.target.name]: event.target.value})
    }
    
    render() {
        const inputData = [
            {name: 'color', title: 'Color', state: this.state.color},
            {name: 'pluralNoun', title: 'Plural Noun', state: this.state.pluralNoun},
            {name: 'adjectiveOne', title: 'Adjective', state: this.state.adjectiveOne},
            {name: 'celebOne', title: 'Celebrity', state: this.state.celebOne},
            {name: 'adjectiveTwo', title: 'Adjective', state: this.state.adjectiveTwo},
            {name: 'nounOne', title: 'Noun', state: this.state.nounOne},
            {name: 'numberOne', title: 'Number', state: this.state.numberOne},
            {name: 'numberTwo', title: 'Number', state: this.state.numberTwo},
            {name: 'nounTwo', title: 'Noun', state: this.state.nounTwo},
            {name: 'adjectiveThree', title: 'Adjective', state: this.state.adjectiveThree},
            {name: 'celebTwo', title: 'Celebrity', state: this.state.celebTwo},
            {name: 'celebThree', title: 'Celebrity', state: this.state.celebThree},
            {name: 'adjectiveFour', title: 'Adjective', state: this.state.adjectiveFour},
            {name: 'nounThree', title: 'Noun', state: this.state.nounThree},
            {name: 'celebFour', title: 'Celebrity', state: this.state.celebFour},
            {name: 'adjectiveFive', title: 'Adjective', state: this.state.adjectiveFive}
        ]
        
        return (
            <div className="card">
                {
                    inputData.map(data => Input((data), this.handleInputChange))
                }
                
            
                { /*Input('color', 'Color', this.state.color, this.handleInputChange)}
                
                { Input('pluralNoun', 'Plural Noun', this.state.pluralNoun, this.handleInputChange)}
                
                { Input('adjectiveOne', 'Adjective', this.state.adjectiveOne, this.handleInputChange)}
                
                { Input('celebOne', 'Celebrity', this.state.celebOne, this.handleInputChange)*/}
            </div>
        );
        
    }
}

export default Card;