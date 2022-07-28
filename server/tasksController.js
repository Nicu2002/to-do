const Day = require('../models/Day');
const mongoose = require('mongoose');

class tasksController {
    async tasks(req, res) {
        try{
            const tasks = await Day.find(req.query.day ? {date: req.query.day} : {})
            res.json(tasks);
        } catch (e) {
            console.log(e);
        }
    }
    async newTask(req, res) {
        try{
            const tasks = await Day.findOne({date: req.body.date});
            await Day.updateOne({date: req.body.date}, {tasks: [...tasks.tasks, req.body.task]});
            const newTask = await Day.findOne({date: req.body.date});

            res.json(newTask.tasks[newTask.tasks.length - 1]);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new tasksController();