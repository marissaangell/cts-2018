import React from 'react';

const ChangeDate = (callback) => {
    return (
        <button key={1} className="change-date" onClick={callback}>
            <i className="fas fa-calendar-alt"></i>
            Change Date
        </button>
    )
}

export default ChangeDate;