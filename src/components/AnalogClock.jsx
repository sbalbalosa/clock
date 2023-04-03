import React, { useContext } from 'react';
import './AnalogClock.css';
import { ClockContext } from './ClockProvider';

export default function AnalogClock({ height = 200, width = 200}) {
    const { hours, minutes, seconds } = useContext(ClockContext);

    const clockStyle = {
        width: width,
        height: height
    }

    const hourStyle = {
        transform: `rotate(${(hours % 12) * 30 + minutes / 2}deg)`
    };

    const minuteStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };

    const secondStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };

    return (
        <div className="clock" style={clockStyle}>
            <div className="clock__hour" style={hourStyle}></div>
            <div className="clock__minute" style={minuteStyle}></div>
            <div className="clock__second" style={secondStyle}></div>
        </div>
    );
};