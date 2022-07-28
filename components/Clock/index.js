import useClockHook from "../../hooks/useClockHook";

import style from './Clock.module.css';

const Clock = () => {
    const {hours, minutes} = useClockHook();

    return (
        <div className={style.time}>
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span></span>
        </div>
    );
};

export default Clock;