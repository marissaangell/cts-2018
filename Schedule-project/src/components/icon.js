import React from 'react';

const Icon = (icon, className) => {
    return (
        <div className="icon">
            <i className={`${icon} ${className}`}></i>
        </div>
    )
}

export default Icon;