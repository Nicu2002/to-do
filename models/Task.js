const {Schema, model} = require('mongoose');

const Task = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    status: {type: String, required: true}
})

module.exports = model('Task', Task);