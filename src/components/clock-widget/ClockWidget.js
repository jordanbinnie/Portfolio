import React, { useState, useEffect } from 'react'
import './ClockWidget.css'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css';
import useCurrentWidth from '../../hooks/useCurrentWidth';

function ClockWidget() {

    let width = useCurrentWidth()
    const [value, setValue] = useState(getTime())

    function getTime() {

        // create Date object for current location
        const date = new Date();
    
        // convert to milliseconds, add local time zone offset and get UTC time in milliseconds
        const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
    
        // time offset for New Zealand is +12
        const timeOffset = 12;
    
        // create new Date object for a different timezone using supplied its GMT offset.
        const NewZealandTime = new Date(utcTime + (3600000 * timeOffset));

        return NewZealandTime
    }


    useEffect(() => {
        const interval = setInterval(() => setValue(getTime()), 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

      const clockSize = () => {
        if (width > 1320) return 150
        if (width < 1320 && width > 920) return 75
        if (width < 920) return 70
      }

    return (
        <div className="ClockWidget">
           <Clock size={clockSize()} value={value}/>
           <button className="button ClockWidget_button paragraph--2">New Zealand</button>
        </div>
    )
}

export default ClockWidget