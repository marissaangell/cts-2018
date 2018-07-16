import React, {Component} from 'react';
import Icon from './icon';

class Action extends Component {
    
    constructor(props){
        super(props)
        this.status = false;
    }
    
    handleAction = function() {
        this.props.onClick();
        
        if(!this.status) {
            document.getElementById(this.id).classList.add('action-remove');
            console.log('add class for', this.id);
        } else {
            document.getElementById(this.id).classList.remove('action-remove');
            console.log('remove class for', this.id);
        }
        this.status = !this.status;
    }.bind(this);
    
    render(){
        this.id = `action-${this.props.id}`;
        return(
            <a 
                id={this.id}
                onClick={() => this.handleAction()} 
                className={`${this.props.className} action`}
            ></a> 
            
            //<button onClick={() => this.props.onClick()} className={`${this.props.className} action`}>
            //    { Icon('fas fa-plus-circle') }
            //    {/* Icon('fas fa-times-cirlce') */}
            //</button> 
        )
    }
}

export default Action;