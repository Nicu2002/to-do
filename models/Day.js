const {Schema, model} = require('mongoose');

const Day = new Schema({
    date: {type: String, unique: true, required: true},
    tasks: [
        {
            title: {type: String, required: true},
            description: {type: String, required: false},
            status: {type: String, required: true}
        }
    ]
})

module.exports = model('Day', Day)