const Day = require('../models/Day');
const mongoose = require('mongoose');

class tasksController {
    async tasks(req, res) {
        try{
            const tasks = await Day.find(req.query.day ? {date: req.query.day} : {})
            if(tasks) {
                res.json(tasks);
            }
            else {
                res.json({data: null});
            }
        } catch (e) {
            console.log(e);
        }
    }
    async newTask(req, res) {
        try{
            const tasks = await Day.findOne({date: req.body.date});
            if(tasks == null) {
                const newTask = new Day({date: req.body.date, tasks: [req.body.task]});
                await newTask.save();
                res.json(newTask.tasks[0]);
            }
            else {
                await Day.updateOne({date: req.body.date}, {tasks: [...tasks.tasks, req.body.task]});
                const newTask = await Day.findOne({date: req.body.date});

                res.json(newTask.tasks[newTask.tasks.length - 1]);
            }
        } catch (e) {
            console.log(e);
        }
    }
    async deleteTask(req, res) {
        try{
            const filtredTasks = req.body.tasks.filter(item => item._id !== req.body.id);
            await Day.updateOne({date: req.body.date}, {tasks: [...filtredTasks]});
            res.send("deleted task");

        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new tasksController();