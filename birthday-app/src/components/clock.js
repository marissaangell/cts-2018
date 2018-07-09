import React, {Component} from 'react';

class Clock extends Component {
    render() {
        const time = this.props.timeRemaining;
        return (
            <div className="clock">
                <div className="clock__days clock__box">
                    <label className="clock__title">DAYS</label>
                    <label className="clock__amount">{time.days}</label>
                </div>
                
                <div className="clock__hours clock__box">
                    <label className="clock__title">HOURS</label>
                    <label className="clock__amount">{time.hours}</label>
                </div>
                
                <div className="clock__minutes clock__box">
                    <label className="clock__title">MINUTES</label>
                    <label className="clock__amount">{time.minutes}</label>
                </div>
                
                <div className="clock__seconds clock__box">
                    <label className="clock__title">SECONDS</label>
                    <label className="clock__amount">{time.seconds}</label>
                </div>
            </div>
        )
    }
}

export default Clock;