import { useContext, useEffect, useState } from "react";
import { TimerContext } from "../contexts/timer";

export function TimerComponent() {
    const { time, setTime } = useContext(TimerContext)
    const [counterEnabled, setCounterEnabled] = useState(false);

    // Handle starting the timer
    const onClickStart = () => {
        if (!counterEnabled && time > 0) {
            setCounterEnabled(true);
        }
    };

    // Handle resetting the timer
    const onTimeReset = () => {
        setCounterEnabled(false);
        setTime(15);
    };

    useEffect(() => {
        let timer = null;
        if (counterEnabled) {
            if (time > 0) {
                timer = setTimeout(() => {
                    setTime(time - 1);
                }, 1000);
            } else {
                // Automatically stop the timer if time runs out
                setCounterEnabled(false);
            }
        }
        
        // Cleanup the timer when the component unmounts or the counterEnabled changes
        return () => clearTimeout(timer);
    }, [time, counterEnabled]); // Correctly manage effect dependencies

    return (
        <div className="counter-wrapper">
            <div>{time}</div>
            <button className="btn" onClick={onClickStart}>Start</button>
            <button className="btn" onClick={onTimeReset}>Reset</button>
        </div>
    );
}
