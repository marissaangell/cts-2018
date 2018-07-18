import React, {Component} from 'react';

class HeaderWrapper extends Component {
    render(){
        return (
            <div className='header-wrapper'>
                <h1>Welcome to HOA Manager!</h1>
                <p>Please log in to continue</p>
                {this.props.children}
            </div>
        )
    }
}

export default HeaderWrapper;