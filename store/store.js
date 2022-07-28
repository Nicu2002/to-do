import {configureStore} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";


import tasksReducer from "./tasksSlice";
import calendarReducer from './calendarSlice';

const reducer = {
    tasks: tasksReducer,
    calendar: calendarReducer
}

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
