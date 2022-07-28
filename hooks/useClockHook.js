import {useEffect, useState} from "react";


const useClockHook = () => {
    const [clock, setClock] = useState({hours: 0, minutes: 0});

    const updateTime = () => {
        const time = new Date();
        let hours = time.getHours() < 10 ? `0${time.getHours()}`: time.getHours();
        let minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}`: time.getMinutes();
        setClock({hours, minutes});
    }

    useEffect(()=> {
        updateTime();
        setInterval(updateTime, 60000);
    }, []);

    return clock;
}

export default useClockHook;