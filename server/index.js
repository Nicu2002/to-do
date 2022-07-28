const express = require('express');
const mongoose = require('mongoose');
const tasksRouter = require('./tasksRouter');
const cors = require("cors");


const app = express();
app.options("*", cors());
app.use(express.json());
app.use("/day", tasksRouter);

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://qwerty:qwerty123@cluster0.jlgrqds.mongodb.net/calendar?retryWrites=true&w=majority');
        app.listen(4000, ()=> console.log("server started ..."));
    } catch (e) {
        console.log(e);
    }
}

start();