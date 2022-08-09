import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        loadData(state, action) {
            state.tasks = [...action.payload];
        },
        addTask(state, action) {
            state.tasks = [...state.tasks, action.payload]
        }
    }
})

export const {loadData, addTask} = tasksSlice.actions;
export default tasksSlice.reducer;