const Router = require('express');
const router = new Router();
const controller = require('./tasksController');
const cors = require("cors");

router.get('/', controller.tasks);
router.post('/newTask', cors(), controller.newTask)
router.delete('/deleteTask', cors(), controller.deleteTask)
router.put('/done', cors(), controller.doneTask)

module.exports = router;