import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadData} from "../store/tasksSlice";
import {useRouter} from "next/router";


const useDayListHook = (data) => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(loadData(data[0].tasks));
    }, []);

    const router = useRouter();
    const day = useSelector(state => state.tasks);
    const tasks = day.tasks;

    const tasksStatus = ()=> {
        let tasksDone = 0;
        for(let i = 0; i < tasks.length; i++) {
            if(tasks[i].status === "done") {
                tasksDone++;
            }
        }
        return tasksDone;
    }

    const pushRoute = ()=> {
        router.push("/");
    }

    return {pushRoute, tasksStatus, tasks}
}

export default  useDayListHook;