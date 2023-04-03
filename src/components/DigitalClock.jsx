import React, { useContext } from "react";
import "./DigitalClock.css";
import { ClockContext } from './ClockProvider';

export default function DigitalClock() {
    const {hours, minutes, seconds} = useContext(ClockContext);

    return (
        <span className="dclock">
            {`${hours}:${minutes}:${seconds}`}
        </span>
    )
}