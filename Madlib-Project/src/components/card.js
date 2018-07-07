import React, {Component} from 'react';

import Input from './input';
import Content from './content';

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
            adjectiveFive: '',
            
            contentVisible: false
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    
    handleInputChange(event){
        this.setState({[event.target.name]: event.target.value})
    }
    
    handleFormSubmit(event){
        event.preventDefault();
        
        if (this.state.contentVisible){
            this.setState({
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
            adjectiveFive: '',
            });
        }
        
        this.setState({contentVisible: !this.state.contentVisible});
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
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                {
                    inputData.map((data, index) => {
                        return Input((data), this.handleInputChange, index)
                    })
                }
                </div>
                
                <button className={`card__${this.state.contentVisible ? 'clear' : 'generate'}`} type="submit">
                    {this.state.contentVisible ? 'Clear Form' : 'Generate Madlib'}
                </button>
                
                {
                this.state.contentVisible ?                     <Content data={this.state}/> : ''
                }
            
                { /*Input('color', 'Color', this.state.color, this.handleInputChange)}
                
                { Input('pluralNoun', 'Plural Noun', this.state.pluralNoun, this.handleInputChange)}
                
                { Input('adjectiveOne', 'Adjective', this.state.adjectiveOne, this.handleInputChange)}
                
                { Input('celebOne', 'Celebrity', this.state.celebOne, this.handleInputChange)*/}
            </form>
        );
        
    }
}

export default Card;