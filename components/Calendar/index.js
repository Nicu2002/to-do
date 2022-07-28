import style from './Calendar.module.css';
import useCalendarHook from "../../hooks/useCalendarHook";


const Calendar = () => {
    const cells = useCalendarHook();

    return (
        <div className={style.calendar}>
            {cells}
        </div>
    );
};

export default Calendar;