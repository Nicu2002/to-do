import Clock from "../Clock";

import style from './DayInfo.module.css';

import {getDay, getExplicitDate} from "../../services/timeService";

const DayInfo = () => {
    return (
        <div className={style.dayInfo}>
            <span className={style.explicitDate}>{getExplicitDate()},</span>
            <span className={style.dayWeek}>{getDay()}</span>
            <Clock/>
        </div>
    );
};

export default DayInfo;