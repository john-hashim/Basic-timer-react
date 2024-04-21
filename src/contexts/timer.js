import { createContext, useState } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({children}) => {
    const [time, setTime] = useState(15);
    
    return <TimerContext.Provider value={{ time, setTime }}>{children}</TimerContext.Provider>
}