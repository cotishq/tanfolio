"use client"

import { useEffect, useState } from "react"
import { clearInterval } from "timers";

const LocalTime = () => {
    const [time , setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const options : Intl.DateTimeFormatOptions = {
                hour : "2-digit",
                minute : "2-digit",
            };

            const formattedTime = now.toLocaleTimeString("en-In" , options);
            setTime(formattedTime);
        };

        updateTime();
        const interval = setInterval(updateTime,60000);
        return() => clearInterval(interval);
    } , []);

    return(
        <div className="fixed top-4 left-4 text-sm md:text-sm text-muted-foreground font-display z-50 select-none" >
            IN {time}
        </div>
    )
}

export default LocalTime;