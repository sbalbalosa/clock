import React, { useEffect, useState } from "react";

export default function useClock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return { 
        hours: date.getHours(), 
        minutes: date.getMinutes(), 
        seconds: date.getSeconds()
    }
}