import React from 'react';

const Header = (title, content) => {
    return (
        
        <div className="header">
            <div className="header__skew"></div>
            <div className="header__border"></div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}

export default Header;