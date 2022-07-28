import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    days: []
}

const calendarSlice = createSlice({
    name: "calendar",
    initialState,
    reducers: {
        loadCalendar(state, action) {
            state.days = [...action.payload];
        }
    }
})

export const {loadCalendar} = calendarSlice.actions;
export default calendarSlice.reducer;