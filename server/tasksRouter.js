const Router = require('express');
const router = new Router();
const controller = require('./tasksController');
const cors = require("cors");

router.get('/', controller.tasks);
router.post('/newTask', cors(), controller.newTask)

module.exports = router;