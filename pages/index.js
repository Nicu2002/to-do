import Head from 'next/head'
import {useDispatch} from "react-redux";
import {useEffect} from "react";

import {loadCalendar} from "../store/calendarSlice";

import Calendar from "../components/Calendar";
import DayInfo from "../components/DayInfo";

const Home = ({data}) => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(loadCalendar(data));
    }, []);

    return (
        <>
            <Head>
                <title>To Do</title>
            </Head>
            <div>
                <h1 className="appTitle">TSK</h1>
                <DayInfo/>
                <Calendar/>
            </div>
        </>
    )
};

export async function getStaticProps() {
    const res = await fetch(`http://localhost:4000/day`)
    const data = await res.json()
    return {props: {data}}
}

export default Home
