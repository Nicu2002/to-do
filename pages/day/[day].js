import {HomeOutlined} from "@ant-design/icons";

import ToDoList from "../../components/ToDoList";
import AddForm from "../../components/AddForm";
import AboutDay from "../../components/AboutDay";

import useDayListHook from "../../hooks/useDayListHook";



const DayList = ({data}) => {

    const {tasks, pushRoute, tasksStatus} = useDayListHook(data);
    const pageFormat = tasks.length !== 0 ? <AboutDay taskDone={tasksStatus()} taskNumber={tasks.length}/> : null;
    return (
        <div>
            <HomeOutlined onClick={pushRoute} style={{fontSize: "30px", cursor: "pointer", margin: "20px 40px"}}/>
            {pageFormat}
            <ToDoList tasks={tasks}/>
            <AddForm/>
        </div>
    );
};

export async function getStaticPaths() {
    const paths = [];
    for(let i = 1; i <= 31; i++) {
        paths.push({params:{day: `${i}`}});
    }
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:4000/day/?day=${params.day}`)
    const data = await res.json()
    return {props: {data}}
}

export default DayList;