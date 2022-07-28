import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {v4 as uuid} from "uuid";
import style from "../components/Calendar/Calendar.module.css";
import {Badge} from "antd";


const useCalendarHook = () => {
    const calendar = useSelector(state => state.calendar.days.map(item => item.date));

    const router = useRouter();
    const date = new Date();
    const numberOfDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const cells = [];
    for(let i = 1; i <= numberOfDays; i++) {
        cells.push(
            <div key={uuid()}
                 className={i === date.getDate() ? `${style.calendarDayToday} ${style.calendarDay}` : style.calendarDay}
                 onClick={(e)=> calendar.includes(`${i}`) ? openDayDetails(i): openDayNoTasks()}>
                {calendar.includes(`${i}`) ? <Badge color="#36AE7C" text={i}/> : i}
            </div>
        );
    }

    const openDayNoTasks = () => {
        router.push(`/day/noTasks`);
    }

    const openDayDetails = (day) => {
        router.push(`/day/${day}`);
    }

    return cells;
}

export default useCalendarHook;